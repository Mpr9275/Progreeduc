// ═══════════════════════════════════════════════════════════════════════════
// MON-ESPACE.JS - Gestion de la signature utilisateur
// V22.0 - localStorage uniquement, pas d'auth
// ═══════════════════════════════════════════════════════════════════════════

const MonEspace = {

    STORAGE_KEY: 'poulp_signature',

    init() {
        this.loadSignature();
    },

    loadSignature() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        const el = document.getElementById('user-signature');
        if (el) {
            el.value = saved || '';
        }
    },

    saveSignature(event) {
        event.preventDefault();

        const signature = document.getElementById('user-signature').value.trim();

        localStorage.setItem(this.STORAGE_KEY, signature);

        app.showAlert('✓ Signature enregistrée');
    },

    getSignature() {
        return localStorage.getItem(this.STORAGE_KEY) || 'Votre kinésithérapeute,\nService de Médecine Physique et de Réadaptation';
    }
};
