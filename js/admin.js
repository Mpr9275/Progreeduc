// ═══════════════════════════════════════════════════════════════════════════
// ADMIN.JS - Chef d'orchestre de l'administration
// V22.0 - Suppression gestion utilisateurs (plus d'auth)
// ═══════════════════════════════════════════════════════════════════════════

const Admin = {
    init() {
        AdminExercises.init();
        AdminPrograms.init();
        this.showAdminView('exercises');
    },

    showAdminView(view) {
        document.getElementById('admin-tab-exercises').classList.remove('active');
        document.getElementById('admin-tab-programs').classList.remove('active');
        document.getElementById(`admin-tab-${view}`).classList.add('active');

        document.getElementById('admin-view-exercises').classList.add('hidden');
        document.getElementById('admin-view-programs').classList.add('hidden');
        document.getElementById(`admin-view-${view}`).classList.remove('hidden');

        if (view === 'exercises') {
            app.showAlert('Administration des exercices');
        } else if (view === 'programs') {
            app.showAlert('Administration des programmes types');
        }
    }
};
