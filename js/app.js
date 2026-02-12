// ═══════════════════════════════════════════════════════════════════════════
// APP.JS - Chef d'orchestre de l'application POULP
// V22.0 - Suppression couche auth
// ═══════════════════════════════════════════════════════════════════════════

const app = {
    exercises: [],
    selectedExercises: [],
    categories: {},
    editingExercise: null,
    currentPhotos: [],
    programTypes: [],
    selectedProgramType: null,
    editingProgramType: null,

    init() {
        this.exercises = [
            ...exercices1Data,
            ...exercices2Data,
            ...(typeof exercices3Data !== 'undefined' ? exercices3Data : []),
            ...(typeof exercices4Data !== 'undefined' ? exercices4Data : [])
        ];

        this.categories = { ...categoriesData };
        this.programTypes = [...programmesTypesData];

        Filters.init();
        Document.init();
        Admin.init();
        Programs.init();

        this.showView('search');
    },

    showView(view) {
        ['search', 'programs', 'admin', 'mon-espace', 'document'].forEach(v => {
            document.getElementById('view-' + v).classList.add('hidden');
        });

        if (view === 'search') {
            document.getElementById('view-search').classList.remove('hidden');
            document.getElementById('search-input').value = '';
            document.querySelectorAll('#zones-filter input:checked').forEach(cb => cb.checked = false);
            document.querySelectorAll('#types-filter input:checked').forEach(cb => cb.checked = false);
            document.querySelectorAll('#materiel-filter input:checked').forEach(cb => cb.checked = false);
            Filters.filterExercises();
            setTimeout(() => {
                const h2 = document.querySelector('#view-search h2[tabindex="-1"]');
                if (h2) h2.focus();
            }, 100);

        } else if (view === 'programs') {
            document.getElementById('view-programs').classList.remove('hidden');
            setTimeout(() => {
                const h2 = document.querySelector('#view-programs h2[tabindex="-1"]');
                if (h2) h2.focus();
            }, 100);

        } else if (view === 'mon-espace') {
            document.getElementById('view-mon-espace').classList.remove('hidden');
            MonEspace.init();
            setTimeout(() => {
                const h2 = document.querySelector('#view-mon-espace h2[tabindex="-1"]');
                if (h2) h2.focus();
            }, 100);

        } else if (view === 'admin') {
            document.getElementById('view-admin').classList.remove('hidden');
            setTimeout(() => {
                const h2 = document.querySelector('#view-admin h2[tabindex="-1"]');
                if (h2) h2.focus();
            }, 100);

        } else if (view === 'document') {
            document.getElementById('view-document').classList.remove('hidden');
        }
    },

    showAlert(message) {
        const container = document.getElementById('alert-container');
        const alert = document.createElement('div');
        alert.className = 'alert';
        alert.textContent = message;
        container.appendChild(alert);
        setTimeout(() => alert.remove(), 3000);
    },

    toggleCollapsible(contentId) {
        const content = document.getElementById(contentId);
        const button = content.previousElementSibling;
        const icon = button.querySelector('.collapsible-icon');
        const isOpen = content.classList.contains('open');
        content.classList.toggle('open');
        if (icon) icon.textContent = isOpen ? '▼' : '▲';
        button.setAttribute('aria-expanded', !isOpen);
    },

    handleKeyboardShortcuts(event) {
        const isCmdOrCtrl = event.metaKey || event.ctrlKey;
        if (!isCmdOrCtrl) return;

        if (event.key === 'f' || event.key === 'F') {
            event.preventDefault();
            this.showView('search');
            setTimeout(() => document.getElementById('search-input').focus(), 100);
            this.showAlert('Vue Recherche activée');
        }

        if (event.key === 'a' || event.key === 'A') {
            event.preventDefault();
            this.showView('admin');
            this.showAlert('Vue Administration activée');
        }

        if (event.key === 'Escape') {
            const modal = document.getElementById('exercise-modal');
            if (modal.classList.contains('active')) AdminExercises.closeModal();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
    document.addEventListener('keydown', (e) => app.handleKeyboardShortcuts(e));
});
