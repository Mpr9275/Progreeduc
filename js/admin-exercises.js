// ═══════════════════════════════════════════════════════════════════════════
// ADMIN-EXERCISES.JS - Gestion des exercices
// V20.6b - Module dédié
// ═══════════════════════════════════════════════════════════════════════════

const AdminExercises = {
    init() {
        this.updateList();
        this.renderModalFilters();
    },

    renderModalFilters() {
        // Modal zones
        const modalZones = document.getElementById('modal-zones');
        modalZones.innerHTML = app.categories.zones.map(zone => `
            <label class="checkbox-label">
                <input type="checkbox" value="${zone}">
                <span>${zone}</span>
            </label>
        `).join('');

        // Modal types
        const modalTypes = document.getElementById('modal-types');
        modalTypes.innerHTML = app.categories.types.map(type => `
            <label class="checkbox-label">
                <input type="checkbox" value="${type}">
                <span>${type}</span>
            </label>
        `).join('');

        // Modal matériel
        const modalMateriel = document.getElementById('modal-materiel');
        modalMateriel.innerHTML = app.categories.materiel.map(mat => `
            <label class="checkbox-label">
                <input type="checkbox" value="${mat}">
                <span>${mat}</span>
            </label>
        `).join('');
    },

    updateList() {
        const container = document.getElementById('admin-exercises-list');
        const searchTerm = document.getElementById('admin-search').value.toLowerCase().trim();
        
        // V20.5 - AFFICHAGE VIDE PAR DÉFAUT
        if (!searchTerm) {
            container.innerHTML = '<div class="empty-state">Utilisez la recherche pour trouver un exercice à modifier ou supprimer.</div>';
            return;
        }
        
        let filtered = app.exercises;
        if (searchTerm) {
            filtered = filtered.filter(ex => 
                ex.titre.toLowerCase().includes(searchTerm) ||
                ex.description.toLowerCase().includes(searchTerm)
            );
        }
        
        if (filtered.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Aucun exercice trouvé.</p>';
            return;
        }

        container.innerHTML = filtered.map(ex => `
            <article class="exercise-card" aria-labelledby="admin-ex-${ex.id}">
                <h3 id="admin-ex-${ex.id}">${ex.titre}</h3>
                <p>${ex.description}</p>
                <div style="margin-bottom: 0.75rem;">
                    ${ex.zones.map(z => `<span class="badge badge-blue">${z}</span>`).join('')}
                    ${ex.types.map(t => `<span class="badge badge-green">${t}</span>`).join('')}
                </div>
                <div class="exercise-actions" role="group" aria-label="Actions pour ${ex.titre}">
                    <button 
                        class="btn-secondary btn-small" 
                        onclick="PhotosViewer.open(${ex.id})"
                        aria-label="Voir les photos de l'exercice ${ex.titre}, ${ex.photos.length} photo${ex.photos.length > 1 ? 's' : ''} disponible${ex.photos.length > 1 ? 's' : ''}"
                    >
                        📷 Voir photo${ex.photos.length > 1 ? 's' : ''} (${ex.photos.length})
                    </button>
                    <button class="btn-primary btn-small" onclick="AdminExercises.edit(${ex.id})" aria-label="Modifier l'exercice ${ex.titre}">
                        ✏️ Modifier
                    </button>
                    <button class="btn-danger btn-small" onclick="AdminExercises.delete(${ex.id})" aria-label="Supprimer l'exercice ${ex.titre}">
                        🗑️ Supprimer
                    </button>
                </div>
            </article>
        `).join('');
    },

    openModal(exerciseId = null) {
        app.editingExercise = exerciseId;
        app.currentPhotos = [];

        const modal = document.getElementById('exercise-modal');
        const title = document.getElementById('modal-title');
        const form = document.getElementById('exercise-form');

        form.reset();
        
        // Vider les champs d'ajout de type et matériel
        document.getElementById('new-type-input').value = '';
        document.getElementById('new-materiel-input').value = '';
        
        if (exerciseId) {
            const ex = app.exercises.find(e => e.id === exerciseId);
            if (ex) {
                title.textContent = 'Modifier un exercice';
                document.getElementById('ex-titre').value = ex.titre;
                document.getElementById('ex-description').value = ex.description;
                
                // Attendre que les checkboxes soient rendues, puis cocher les bonnes
                setTimeout(() => {
                    // Cocher les zones
                    document.querySelectorAll('#modal-zones input').forEach(cb => {
                        cb.checked = ex.zones.includes(cb.value);
                    });
                    
                    // Cocher les types
                    document.querySelectorAll('#modal-types input').forEach(cb => {
                        cb.checked = ex.types.includes(cb.value);
                    });
                    
                    // Cocher le matériel
                    document.querySelectorAll('#modal-materiel input').forEach(cb => {
                        cb.checked = ex.materiel.includes(cb.value);
                    });
                }, 10);

                app.currentPhotos = [...ex.photos];
                this.renderPhotosList();
            }
        } else {
            title.textContent = 'Ajouter un exercice';
        }

        modal.classList.add('active');
    },

    closeModal() {
        document.getElementById('exercise-modal').classList.remove('active');
        app.editingExercise = null;
        app.currentPhotos = [];
    },

    addPhoto() {
        const url = document.getElementById('photo-url').value.trim();
        if (!url) {
            app.showAlert('Veuillez entrer une URL');
            return;
        }

        app.currentPhotos.push({
            url: url,
            alt: `Photo ${app.currentPhotos.length + 1}`
        });

        document.getElementById('photo-url').value = '';
        this.renderPhotosList();
    },

    removePhoto(index) {
        app.currentPhotos.splice(index, 1);
        this.renderPhotosList();
    },

    renderPhotosList() {
        const container = document.getElementById('photos-list');
        
        if (app.currentPhotos.length === 0) {
            container.innerHTML = '<div style="padding: 1rem; text-align: center; color: #6b7280;">Aucune photo ajoutée</div>';
            return;
        }

        container.innerHTML = app.currentPhotos.map((photo, i) => `
            <div class="photo-item">
                <span title="${photo.url}">${photo.url.substring(0, 40)}${photo.url.length > 40 ? '...' : ''}</span>
                <button type="button" class="btn-danger btn-small" onclick="AdminExercises.removePhoto(${i})" aria-label="Supprimer cette photo">×</button>
            </div>
        `).join('');
    },

    save(event) {
        event.preventDefault();

        const titre = document.getElementById('ex-titre').value.trim();
        const description = document.getElementById('ex-description').value.trim();

        const zones = Array.from(document.querySelectorAll('#modal-zones input:checked')).map(cb => cb.value);
        const types = Array.from(document.querySelectorAll('#modal-types input:checked')).map(cb => cb.value);
        const materiel = Array.from(document.querySelectorAll('#modal-materiel input:checked')).map(cb => cb.value);

        if (zones.length === 0) {
            app.showAlert('Veuillez sélectionner au moins une zone');
            return;
        }

        if (types.length === 0) {
            app.showAlert('Veuillez sélectionner au moins un type');
            return;
        }

        if (app.currentPhotos.length === 0) {
            app.showAlert('Veuillez ajouter au moins une photo');
            return;
        }

        const exerciseData = {
            titre,
            description,
            zones,
            types,
            materiel,
            photos: app.currentPhotos
        };

        if (app.editingExercise) {
            // Modification : garder la position dans la liste
            const index = app.exercises.findIndex(ex => ex.id === app.editingExercise);
            if (index !== -1) {
                app.exercises[index] = { ...exerciseData, id: app.editingExercise };
            }
            app.showAlert('Exercice modifié avec succès');
        } else {
            // Ajout : ajouter à la fin
            const newId = Math.max(...app.exercises.map(ex => ex.id), 0) + 1;
            app.exercises.push({ ...exerciseData, id: newId });
            app.showAlert('Exercice ajouté avec succès');
        }

        this.closeModal();
        Filters.filterExercises();
        this.updateList();
    },

    edit(exerciseId) {
        this.openModal(exerciseId);
    },

    delete(exerciseId) {
        const ex = app.exercises.find(e => e.id === exerciseId);
        if (!ex) return;

        if (confirm(`Êtes-vous sûr de vouloir supprimer "${ex.titre}" ?`)) {
            app.exercises = app.exercises.filter(e => e.id !== exerciseId);
            app.selectedExercises = app.selectedExercises.filter(e => e.id !== exerciseId);
            this.updateList();
            Filters.filterExercises();
            Document.updateProgramCount();
            app.showAlert('Exercice supprimé');
        }
    },

    addNewType() {
        const input = document.getElementById('new-type-input');
        const newType = input.value.trim();
        
        if (!newType) {
            app.showAlert('Veuillez entrer un type');
            return;
        }

        if (app.categories.types.includes(newType)) {
            app.showAlert('Ce type existe déjà');
            return;
        }

        app.categories.types.push(newType);
        app.categories.types.sort();
        Filters.renderFilters();
        this.renderModalFilters();
        input.value = '';
        app.showAlert(`Type "${newType}" ajouté`);
    },

    addNewMateriel() {
        const input = document.getElementById('new-materiel-input');
        const newMateriel = input.value.trim();
        
        if (!newMateriel) {
            app.showAlert('Veuillez entrer du matériel');
            return;
        }

        if (app.categories.materiel.includes(newMateriel)) {
            app.showAlert('Ce matériel existe déjà');
            return;
        }

        app.categories.materiel.push(newMateriel);
        app.categories.materiel.sort();
        Filters.renderFilters();
        this.renderModalFilters();
        input.value = '';
        app.showAlert(`Matériel "${newMateriel}" ajouté`);
    }
};
