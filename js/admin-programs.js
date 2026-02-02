// ═══════════════════════════════════════════════════════════════════════════
// ADMIN-PROGRAMS.JS - Gestion des programmes types
// V20.6b - Module dédié
// ═══════════════════════════════════════════════════════════════════════════

const AdminPrograms = {
    currentProgramExercises: [],

    init() {
        this.updateList();
    },

    updateList() {
        const container = document.getElementById('admin-programs-list');
        const searchTerm = document.getElementById('admin-programs-search').value.toLowerCase().trim();
        
        // V20.6a - AFFICHAGE VIDE PAR DÉFAUT (même logique que Exercices)
        if (!searchTerm) {
            container.innerHTML = '<div class="empty-state">Utilisez la recherche pour trouver un programme à modifier ou supprimer.</div>';
            return;
        }
        
        let filtered = app.programTypes;
        if (searchTerm) {
            filtered = filtered.filter(prog => 
                prog.titre.toLowerCase().includes(searchTerm) ||
                prog.descriptif.toLowerCase().includes(searchTerm) ||
                prog.tags.localisation.toLowerCase().includes(searchTerm) ||
                prog.tags.pathologie.toLowerCase().includes(searchTerm) ||
                prog.tags.phase.toLowerCase().includes(searchTerm) ||
                prog.tags.objectif.toLowerCase().includes(searchTerm)
            );
        }
        
        if (filtered.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Aucun programme type trouvé.</p>';
            return;
        }

        container.innerHTML = filtered.map(prog => `
            <article class="program-item" aria-labelledby="admin-prog-${prog.id}">
                <h3 id="admin-prog-${prog.id}">${prog.titre}</h3>
                <div style="margin: 0.5rem 0;">
                    <span class="badge badge-blue">${prog.tags.localisation}</span>
                    <span class="badge badge-green">${prog.tags.pathologie}</span>
                    <span class="badge badge-purple">${prog.tags.phase}</span>
                    <span class="badge badge-orange">${prog.tags.objectif}</span>
                </div>
                <p style="font-size: 0.875rem; color: #6b7280;">${prog.exercices.length} exercices</p>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem;" role="group" aria-label="Actions pour ${prog.titre}">
                    <button class="btn-primary btn-small" onclick="AdminPrograms.edit(${prog.id})" aria-label="Modifier le programme ${prog.titre}">
                        ✏️ Modifier
                    </button>
                    <button class="btn-danger btn-small" onclick="AdminPrograms.delete(${prog.id})" aria-label="Supprimer le programme ${prog.titre}">
                        🗑️ Supprimer
                    </button>
                </div>
            </article>
        `).join('');
    },

    openModal(programId = null) {
        const modal = document.getElementById('program-type-modal');
        const title = document.getElementById('program-modal-title');
        const form = document.getElementById('program-type-form');

        form.reset();
        app.editingProgramType = programId;
        this.currentProgramExercises = [];

        if (programId) {
            const prog = app.programTypes.find(p => p.id === programId);
            if (prog) {
                title.textContent = 'Modifier un programme type';
                document.getElementById('prog-titre').value = prog.titre;
                document.getElementById('prog-descriptif').value = prog.descriptif;
                document.getElementById('prog-localisation').value = prog.tags.localisation;
                document.getElementById('prog-pathologie').value = prog.tags.pathologie;
                document.getElementById('prog-phase').value = prog.tags.phase;
                document.getElementById('prog-objectif').value = prog.tags.objectif;
                this.currentProgramExercises = [...prog.exercices];
            }
        } else {
            title.textContent = 'Ajouter un programme type';
        }

        this.renderExercisesList();
        modal.classList.add('active');
    },

    closeModal() {
        document.getElementById('program-type-modal').classList.remove('active');
        app.editingProgramType = null;
        this.currentProgramExercises = [];
    },

    filterExercises() {
        const searchTerm = document.getElementById('prog-ex-search').value.toLowerCase().trim();
        
        let filtered = app.exercises;
        if (searchTerm) {
            filtered = filtered.filter(ex =>
                ex.titre.toLowerCase().includes(searchTerm) ||
                ex.description.toLowerCase().includes(searchTerm)
            );
        }

        this.renderExercisesList(filtered);
    },

    renderExercisesList(exercises = null) {
        const container = document.getElementById('prog-ex-list');
        const count = document.getElementById('prog-ex-count');
        
        if (!container || !count) return; // Protection si éléments pas encore dans DOM
        
        const exList = exercises || app.exercises || [];
        
        count.textContent = this.currentProgramExercises.length;

        if (exList.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 1rem;">Aucun exercice trouvé.</p>';
            return;
        }

        container.innerHTML = exList.map(ex => `
            <label class="checkbox-label" style="display: block; padding: 0.75rem; border-bottom: 1px solid #f3f4f6;">
                <input 
                    type="checkbox" 
                    value="${ex.id}" 
                    ${this.currentProgramExercises.includes(ex.id) ? 'checked' : ''}
                    onchange="AdminPrograms.toggleExercise(${ex.id})"
                >
                <div style="flex: 1;">
                    <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
                        <div style="font-weight: 600; flex: 1;">${ex.titre}</div>
                        <button 
                            type="button"
                            class="btn-secondary btn-small" 
                            onclick="event.stopPropagation(); PhotosViewer.open(${ex.id})"
                            aria-label="Voir les photos de l'exercice ${ex.titre}, ${ex.photos.length} photo${ex.photos.length > 1 ? 's' : ''} disponible${ex.photos.length > 1 ? 's' : ''}"
                            style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"
                        >
                            📷 (${ex.photos.length})
                        </button>
                    </div>
                    <div style="font-size: 0.875rem;">
                        ${ex.zones.map(z => `<span class="badge badge-blue">${z}</span>`).join('')}
                        ${ex.types.map(t => `<span class="badge badge-green">${t}</span>`).join('')}
                    </div>
                </div>
            </label>
        `).join('');
    },

    toggleExercise(exerciseId) {
        const index = this.currentProgramExercises.indexOf(exerciseId);
        if (index === -1) {
            this.currentProgramExercises.push(exerciseId);
        } else {
            this.currentProgramExercises.splice(index, 1);
        }
        document.getElementById('prog-ex-count').textContent = this.currentProgramExercises.length;
    },

    save(event) {
        event.preventDefault();

        const titre = document.getElementById('prog-titre').value.trim();
        const descriptif = document.getElementById('prog-descriptif').value.trim();
        const localisation = document.getElementById('prog-localisation').value.trim();
        const pathologie = document.getElementById('prog-pathologie').value.trim();
        const phase = document.getElementById('prog-phase').value.trim();
        const objectif = document.getElementById('prog-objectif').value.trim();

        if (this.currentProgramExercises.length === 0) {
            app.showAlert('Veuillez sélectionner au moins un exercice');
            return;
        }

        const programData = {
            titre,
            descriptif,
            tags: {
                localisation,
                pathologie,
                phase,
                objectif
            },
            exercices: [...this.currentProgramExercises]
        };

        if (app.editingProgramType) {
            // Modification
            const index = app.programTypes.findIndex(p => p.id === app.editingProgramType);
            if (index !== -1) {
                app.programTypes[index] = { ...programData, id: app.editingProgramType };
            }
            app.showAlert('Programme modifié avec succès');
        } else {
            // Ajout
            const newId = Math.max(...app.programTypes.map(p => p.id), 0) + 1;
            app.programTypes.push({ ...programData, id: newId });
            app.showAlert('Programme ajouté avec succès');
        }

        this.closeModal();
        this.updateList();
        
        // Rafraîchir la vue programmes si active
        if (!document.getElementById('view-programs').classList.contains('hidden')) {
            Programs.init();
        }
    },

    edit(programId) {
        this.openModal(programId);
    },

    delete(programId) {
        const prog = app.programTypes.find(p => p.id === programId);
        if (!prog) return;

        if (confirm(`Êtes-vous sûr de vouloir supprimer "${prog.titre}" ?`)) {
            app.programTypes = app.programTypes.filter(p => p.id !== programId);
            this.updateList();
            
            // Rafraîchir la vue programmes si active
            if (!document.getElementById('view-programs').classList.contains('hidden')) {
                Programs.init();
            }
            
            app.showAlert('Programme supprimé');
        }
    }
};
