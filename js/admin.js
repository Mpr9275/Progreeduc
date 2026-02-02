// ═══════════════════════════════════════════════════════════════════════════
// ADMIN.JS - Chef d'orchestre de l'administration
// V20.6b - Architecture modulaire
// ═══════════════════════════════════════════════════════════════════════════

const Admin = {
    init() {
        AdminExercises.init();
        AdminPrograms.init();
        this.showAdminView('exercises'); // Par défaut sur Exercices
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // NAVIGATION ENTRE SOUS-VUES ADMIN
    // ═══════════════════════════════════════════════════════════════════════════

    showAdminView(view) {
        // Gérer les onglets
        document.getElementById('admin-tab-exercises').classList.remove('active');
        document.getElementById('admin-tab-programs').classList.remove('active');
        document.getElementById(`admin-tab-${view}`).classList.add('active');

        // Gérer les vues
        document.getElementById('admin-view-exercises').classList.add('hidden');
        document.getElementById('admin-view-programs').classList.add('hidden');
        document.getElementById(`admin-view-${view}`).classList.remove('hidden');

        // Annonce VoiceOver
        if (view === 'exercises') {
            app.showAlert('Administration des exercices');
        } else if (view === 'programs') {
            app.showAlert('Administration des programmes types');
        }
    }
};
