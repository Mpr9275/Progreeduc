// ═══════════════════════════════════════════════════════════════════════════
// DOCUMENT.JS - Gestion du programme en cours et génération de document
// V20.8 - Message erreur amélioré génération PDF
// ═══════════════════════════════════════════════════════════════════════════

const Document = {
    init() {
        this.updateProgramCount();
        this.renderSelectedExercises();
    },

    addToProgram(exerciseId) {
        const exercise = app.exercises.find(ex => ex.id === exerciseId);
        if (!exercise) return;

        // Vérifier si déjà ajouté
        if (app.selectedExercises.some(ex => ex.id === exerciseId)) {
            app.showAlert('Cet exercice est déjà dans le programme');
            return;
        }

        app.selectedExercises.push({
            ...exercise,
            consigne: '',
            posologie: ''
        });

        this.updateProgramCount();
        this.renderSelectedExercises();
        
        // Annonce avec le nombre total d'exercices
        const count = app.selectedExercises.length;
        app.showAlert(`Exercice ajouté. ${count} exercice${count > 1 ? 's' : ''} dans le programme`);
    },

    removeFromProgram(exerciseId) {
        app.selectedExercises = app.selectedExercises.filter(ex => ex.id !== exerciseId);
        this.updateProgramCount();
        this.renderSelectedExercises();
        app.showAlert('Exercice retiré du programme');
    },

    moveUp(index) {
        if (index === 0) return;
        const exerciseName = app.selectedExercises[index].titre;
        [app.selectedExercises[index - 1], app.selectedExercises[index]] = 
        [app.selectedExercises[index], app.selectedExercises[index - 1]];
        this.renderSelectedExercises();
        app.showAlert(`${exerciseName} déplacé vers le haut`);
    },

    moveDown(index) {
        if (index === app.selectedExercises.length - 1) return;
        const exerciseName = app.selectedExercises[index].titre;
        [app.selectedExercises[index], app.selectedExercises[index + 1]] = 
        [app.selectedExercises[index + 1], app.selectedExercises[index]];
        this.renderSelectedExercises();
        app.showAlert(`${exerciseName} déplacé vers le bas`);
    },

    updateProgramCount() {
        document.getElementById('program-count').textContent = app.selectedExercises.length;
        document.getElementById('program-plural').textContent = app.selectedExercises.length > 1 ? 's' : '';
    },

    renderSelectedExercises() {
        const container = document.getElementById('selected-list');
        this.updateProgramCount();

        if (app.selectedExercises.length === 0) {
            container.innerHTML = '<div class="empty-state">Aucun exercice sélectionné. Ajoutez des exercices depuis la liste ci-dessus.</div>';
            return;
        }

        container.innerHTML = app.selectedExercises.map((ex, i) => `
            <article class="program-exercise" role="listitem" aria-labelledby="exercise-title-${ex.id}">
                <h4 id="exercise-title-${ex.id}">Exercice ${i + 1} : ${ex.titre}</h4>
                <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.75rem;">${ex.description}</p>
                
                <div style="font-weight: 600; font-size: 0.875rem; margin-bottom: 0.5rem;">Actions :</div>
                <div class="program-controls" role="group" aria-label="Actions pour ${ex.titre}">
                    <button class="btn-secondary btn-small" onclick="Document.moveUp(${i})" ${i === 0 ? 'disabled' : ''} aria-label="Déplacer ${ex.titre} vers le haut dans la liste">↑ Haut</button>
                    <button class="btn-secondary btn-small" onclick="Document.moveDown(${i})" ${i === app.selectedExercises.length - 1 ? 'disabled' : ''} aria-label="Déplacer ${ex.titre} vers le bas dans la liste">↓ Bas</button>
                    <button class="btn-danger btn-small" onclick="Document.removeFromProgram(${ex.id})" aria-label="Retirer ${ex.titre} du programme">🗑️ Retirer</button>
                </div>
                
                <label for="consigne-${ex.id}" style="display: block; margin-top: 1rem; font-size: 0.875rem; font-weight: 600;">
                    Consignes spécifiques pour cet exercice (facultatif) :
                </label>
                <input 
                    type="text" 
                    id="consigne-${ex.id}"
                    value="${ex.consigne || ''}"
                    placeholder="Ex: À effectuer avec une douleur inférieure à 3/10"
                    oninput="Document.updateConsigne(${ex.id}, this.value)"
                    onkeydown="if(event.key === 'Enter') event.preventDefault()"
                    style="margin-top: 0.5rem;"
                    aria-label="Consignes personnalisées pour l'exercice ${ex.titre}"
                >

                <label for="posologie-${ex.id}" style="display: block; margin-top: 1rem; font-size: 0.875rem; font-weight: 600;">
                    Posologie (facultatif) :
                </label>
                <input 
                    type="text" 
                    id="posologie-${ex.id}"
                    value="${ex.posologie || ''}"
                    placeholder="Ex: 3 fois par jour, 30 secondes"
                    oninput="Document.updatePosologie(${ex.id}, this.value)"
                    onkeydown="if(event.key === 'Enter') event.preventDefault()"
                    style="margin-top: 0.5rem;"
                    aria-label="Posologie pour l'exercice ${ex.titre}"
                >
                <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #e5e7eb;">
            </article>
        `).join('');
    },

    updateConsigne(exerciseId, value) {
        const ex = app.selectedExercises.find(e => e.id === exerciseId);
        if (ex) {
            ex.consigne = value;
        }
    },

    updatePosologie(exerciseId, value) {
        const ex = app.selectedExercises.find(e => e.id === exerciseId);
        if (ex) {
            ex.posologie = value;
        }
    },

    clearProgram() {
        if (app.selectedExercises.length === 0) {
            app.showAlert('Le programme est déjà vide');
            return;
        }

        if (confirm('Êtes-vous sûr de vouloir vider tout le programme ?')) {
            app.selectedExercises = [];
            this.updateProgramCount();
            this.renderSelectedExercises();
            app.showAlert('Programme vidé');
        }
    },

    generateDocument() {
        // V20.8 - MESSAGE ERREUR AMÉLIORÉ
        if (app.selectedExercises.length === 0) {
            app.showAlert('Votre programme est vide. Ajoutez au moins un exercice depuis la recherche pour générer un document.');
            return;
        }

        const patientName = document.getElementById('patient-name').value.trim();
        const customMessage = document.getElementById('custom-message').value.trim();
        const programDescription = document.getElementById('program-type-description').value.trim();

        const date = new Date().toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const greeting = patientName ? `${patientName},` : 'Madame, Monsieur,';

        // V20.7b - Conteneur global avec marges pour le PDF
        let html = `
            <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
            
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 2px solid #2563eb;">
                <img src="https://i.postimg.cc/2jHfghbR/Logo_SSA.png" 
                     alt="Logo Service de Santé des Armées" 
                     style="height: 80px; object-fit: contain;">
                
                <div style="text-align: center; flex: 1; margin: 0 1rem;">
                    <h2 style="color: #2563eb; margin: 0; font-size: 1.25rem;">
                        Service de Médecine Physique et Réadaptation
                    </h2>
                    <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">
                        HNIA Percy
                    </p>
                </div>
                
                <img src="https://i.postimg.cc/MTR20ftk/Logo_MPR.jpg" 
                     alt="Logo Service MPR" 
                     style="height: 80px; object-fit: contain;">
            </div>

            <div class="document-date">${date}</div>

            <div class="document-intro">
                <p>${greeting}</p>
                <p>Vous avez récemment bénéficié de soins en masso-kinésithérapie dans notre service de médecine physique et réadaptation. Afin de poursuivre vos efforts, voici un programme d'exercices personnalisé.</p>
            </div>
        `;

        // V20.7b - ORDRE MODIFIÉ : Message personnalisé AVANT descriptif programme
        if (customMessage) {
            html += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: #f0f9ff; border-left: 4px solid #2563eb; border-radius: 0.25rem;">
                <p style="margin: 0; line-height: 1.6;"><strong>💬 Message de votre kinésithérapeute :</strong></p>
                <p style="margin: 0.5rem 0 0 0; line-height: 1.6;">${customMessage}</p>
            </div>
            `;
        }

        if (programDescription) {
            html += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.25rem;">
                <p style="margin: 0; line-height: 1.6;"><strong>📋 Votre programme :</strong></p>
                <p style="margin: 0.5rem 0 0 0; white-space: pre-line; line-height: 1.6;">${programDescription}</p>
            </div>
            `;
        }

        html += `
            <div class="document-signature">
                <p><strong>Bonne rééducation !</strong></p>
                <p>Cécile HENRIET</p>
                <p>01 41 46 66 46</p>
                <p>fiches.kine.mpr.percy@gmail.com</p>
            </div>
        `;

        // V20.7b - COMPTEUR EXERCICES dans le titre
        html += `<h2 style="color: #2563eb; margin-bottom: 1.5rem;">VOS EXERCICES (${app.selectedExercises.length})</h2>`;

        app.selectedExercises.forEach((ex, i) => {
            html += `
                <div class="document-exercise">
                    <h3>${i + 1}. ${ex.titre}</h3>
                    <p><strong>Description :</strong> ${ex.description}</p>
                    ${ex.consigne ? `<div style="margin: 0.75rem 0;"><strong>Consignes :</strong> ${ex.consigne}</div>` : ''}
                    ${ex.posologie ? `<div style="margin: 0.75rem 0;"><strong>Posologie :</strong> ${ex.posologie}</div>` : ''}
                    ${ex.photos.map(photo => `<img src="${photo.url}" alt="${photo.alt}">`).join('')}
                </div>
            `;
        });

        // V20.7b - Fermeture du conteneur global
        html += `</div>`;

        document.getElementById('document-content').innerHTML = html;
        app.showView('document');
        app.showAlert('Document généré avec succès');
    }
};
