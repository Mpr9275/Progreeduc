// ═══════════════════════════════════════════════════════════════════════════
// PHOTOS-VIEWER.JS - Visionneuse de photos d'exercices
// ═══════════════════════════════════════════════════════════════════════════

const PhotosViewer = {
    currentExercise: null,
    currentPhotoIndex: 0,

    handleEscape(event) {
        if (event.key === 'Escape') {
            PhotosViewer.close();
        }
    },

    open(exerciseId) {
        const exercise = app.exercises.find(ex => ex.id === exerciseId);
        if (!exercise || !exercise.photos || exercise.photos.length === 0) {
            app.showAlert('Aucune photo disponible pour cet exercice');
            return;
        }

        this.currentExercise = exercise;
        this.currentPhotoIndex = 0;

        // Mettre à jour le titre
        document.getElementById('photos-modal-title').textContent = `Photos de ${exercise.titre}`;

        // Afficher la première photo
        this.updatePhoto();

        // Ouvrir la modale
        document.getElementById('photos-modal').classList.add('active');

        // Écouter la touche Échap
        document.addEventListener('keydown', this.handleEscape);

        // Annonce VoiceOver
        const count = exercise.photos.length;
        app.showAlert(`Photos de ${exercise.titre}, ${count} photo${count > 1 ? 's' : ''}`);
    },

    close() {
        document.getElementById('photos-modal').classList.remove('active');
        
        // Retirer l'écoute de la touche Échap
        document.removeEventListener('keydown', this.handleEscape);
        
        this.currentExercise = null;
        this.currentPhotoIndex = 0;
    },

    updatePhoto() {
        if (!this.currentExercise) return;

        const photo = this.currentExercise.photos[this.currentPhotoIndex];
        const img = document.getElementById('photo-viewer-img');
        const counter = document.getElementById('photo-counter');
        const prevBtn = document.getElementById('photo-prev-btn');
        const nextBtn = document.getElementById('photo-next-btn');
        const navigation = document.getElementById('photo-navigation');

        // Mettre à jour l'image
        img.src = photo.url;
        img.alt = photo.alt;

        // Mettre à jour le compteur
        const total = this.currentExercise.photos.length;
        counter.textContent = `Photo ${this.currentPhotoIndex + 1} sur ${total}`;

        // Gérer la navigation
        if (total === 1) {
            navigation.style.display = 'none';
        } else {
            navigation.style.display = 'flex';
            
            // Désactiver/activer les boutons selon la position
            if (this.currentPhotoIndex === 0) {
                prevBtn.disabled = true;
            } else {
                prevBtn.disabled = false;
            }

            if (this.currentPhotoIndex === total - 1) {
                nextBtn.disabled = true;
            } else {
                nextBtn.disabled = false;
            }
        }
    },

    prev() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            this.updatePhoto();
            app.showAlert(`Photo ${this.currentPhotoIndex + 1} sur ${this.currentExercise.photos.length}`);
        }
    },

    next() {
        if (this.currentPhotoIndex < this.currentExercise.photos.length - 1) {
            this.currentPhotoIndex++;
            this.updatePhoto();
            app.showAlert(`Photo ${this.currentPhotoIndex + 1} sur ${this.currentExercise.photos.length}`);
        }
    }
};
