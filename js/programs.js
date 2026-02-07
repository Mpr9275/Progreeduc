// ═══════════════════════════════════════════════════════════════════════════
// PROGRAMS.JS - Gestion des programmes types
// V20.12 - Ajout toggleAdvancedFilters()
// ═══════════════════════════════════════════════════════════════════════════

const Programs = {
    init() {
        this.renderProgramsList();
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // V20.12 - NOUVELLE FONCTION : Afficher/masquer les filtres avancés
    // ═══════════════════════════════════════════════════════════════════════════
    toggleAdvancedFilters() {
        const advancedFilters = document.getElementById('program-advanced-filters');
        advancedFilters.classList.toggle('hidden');
        
        // Annonce VoiceOver
        if (advancedFilters.classList.contains('hidden')) {
            app.showAlert('Filtres avancés masqués');
        } else {
            app.showAlert('Filtres avancés affichés');
        }
    },

    renderProgramsList() {
        const container = document.getElementById('programs-list');
        
        if (app.programTypes.length === 0) {
            container.innerHTML = '<div class="empty-state">Aucun programme type disponible.</div>';
            return;
        }

        container.innerHTML = app.programTypes.map(prog => `
            <article class="program-type-card" role="listitem" aria-labelledby="prog-${prog.id}">
                <h3 id="prog-${prog.id}">${prog.titre}</h3>
                <div style="margin: 0.5rem 0;">
                    <span class="badge badge-blue">${prog.tags.localisation}</span>
                    <span class="badge badge-green">${prog.tags.pathologie}</span>
                    <span class="badge badge-purple">${prog.tags.phase}</span>
                    <span class="badge badge-orange">${prog.tags.objectif}</span>
                </div>
                <p style="font-size: 0.875rem; color: #6b7280; margin: 0.5rem 0;">
                    ${prog.exercices.length} exercice${prog.exercices.length > 1 ? 's' : ''}
                </p>
                <button 
                    class="btn-primary" 
                    onclick="Programs.loadProgramType(${prog.id})" 
                    style="margin-top: 0.5rem;"
                    aria-label="Charger le programme ${prog.titre}"
                >
                    📥 Charger ce programme
                </button>
            </article>
        `).join('');
    },

    loadProgramType(programId) {
        const program = app.programTypes.find(p => p.id === programId);
        if (!program) {
            app.showAlert('Programme introuvable');
            return;
        }

        // Charger le descriptif dans le champ (source de vérité = DOM)
        document.getElementById('program-type-description').value = program.descriptif;

        // Ajouter les exercices au programme (sans doublons)
        let addedCount = 0;
        program.exercices.forEach(exId => {
            const exercise = app.exercises.find(ex => ex.id === exId);
            if (exercise && !app.selectedExercises.some(ex => ex.id === exId)) {
                app.selectedExercises.push({
                    ...exercise,
                    consigne: '',
                    posologie: ''
                });
                addedCount++;
            }
        });

        // Mettre à jour l'affichage
        Document.updateProgramCount();
        Document.renderSelectedExercises();

        // Naviguer vers la vue recherche
        app.showView('search');

        // Scroller vers la section Programme
        setTimeout(() => {
            const programSection = document.getElementById('section-programme');
            if (programSection) {
                programSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);

        // Annonce VoiceOver
        app.showAlert(`Programme chargé : ${addedCount} exercice${addedCount > 1 ? 's' : ''} ajouté${addedCount > 1 ? 's' : ''}`);
    },

    filterPrograms() {
        // Note : Cette fonction existe déjà pour la recherche textuelle
        // On la garde intacte pour le moment
        // Les filtres par tags pourront être développés plus tard si besoin
    }
};
