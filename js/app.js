// ═══════════════════════════════════════════════════════════════════════════
// APP.JS - Chef d'orchestre de l'application POULP
// V20.11 - Ajout gestion focus VoiceOver automatique sur h2
// ═══════════════════════════════════════════════════════════════════════════

const app = {
    // Variables partagées entre tous les modules
    exercises: [],
    selectedExercises: [],
    categories: {},
    editingExercise: null,
    currentPhotos: [],
    programTypes: [],
    selectedProgramType: null,
    editingProgramType: null,

    // Initialisation de l'application
    init() {
        // V20.10 - ARCHITECTURE MODULAIRE EXTENSIBLE
        // Fusion des fichiers exercices (exercices3 et exercices4 seront ajoutés progressivement)
        this.exercises = [
            ...exercices1Data,
            ...exercices2Data,
            ...(typeof exercices3Data !== 'undefined' ? exercices3Data : []),
            ...(typeof exercices4Data !== 'undefined' ? exercices4Data : [])
        ];
        
        this.categories = {...categoriesData};
        this.programTypes = [...programmesTypesData];
        
        // Initialiser les modules
        Filters.init();
        Document.init();
        Admin.init();
        Programs.init();
        
        this.showView('search');
    },

    // Navigation entre les vues
    showView(view) {
        document.getElementById('view-search').classList.add('hidden');
        document.getElementById('view-programs').classList.add('hidden');
        document.getElementById('view-admin').classList.add('hidden');
        document.getElementById('view-document').classList.add('hidden');

        if (view === 'search') {
            document.getElementById('view-search').classList.remove('hidden');
            
            // V20.7b - RESET FILTRES AUTOMATIQUE (Option A : réinitialisation complète)
            document.getElementById('search-input').value = '';
            document.querySelectorAll('#zones-filter input:checked').forEach(cb => cb.checked = false);
            document.querySelectorAll('#types-filter input:checked').forEach(cb => cb.checked = false);
            document.querySelectorAll('#materiel-filter input:checked').forEach(cb => cb.checked = false);
            Filters.filterExercises();
            
            // V20.11 - FOCUS VoiceOver automatique sur le premier h2
            setTimeout(() => {
                const firstH2 = document.querySelector('#view-search h2[tabindex="-1"]');
                if (firstH2) {
                    firstH2.focus();
                }
            }, 100);
            
        } else if (view === 'programs') {
            document.getElementById('view-programs').classList.remove('hidden');
            
            // V20.11 - FOCUS VoiceOver automatique sur le h2
            setTimeout(() => {
                const h2 = document.querySelector('#view-programs h2[tabindex="-1"]');
                if (h2) {
                    h2.focus();
                }
            }, 100);
            
        } else if (view === 'admin') {
            document.getElementById('view-admin').classList.remove('hidden');
            
            // V20.11 - FOCUS VoiceOver automatique sur le h2
            setTimeout(() => {
                const h2 = document.querySelector('#view-admin h2[tabindex="-1"]');
                if (h2) {
                    h2.focus();
                }
            }, 100);
            
        } else if (view === 'document') {
            document.getElementById('view-document').classList.remove('hidden');
        }
    },

    // Système d'alertes
    showAlert(message) {
        const container = document.getElementById('alert-container');
        const alert = document.createElement('div');
        alert.className = 'alert';
        alert.textContent = message;
        
        container.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    },

    // Sections repliables
    toggleCollapsible(contentId) {
        const content = document.getElementById(contentId);
        const button = content.previousElementSibling;
        const icon = button.querySelector('.collapsible-icon');
        
        const isOpen = content.classList.contains('open');
        content.classList.toggle('open');
        
        if (icon) {
            icon.textContent = isOpen ? '▼' : '▲';
        }
        
        button.setAttribute('aria-expanded', !isOpen);
    },

    // Raccourcis clavier
    handleKeyboardShortcuts(event) {
        const isCmdOrCtrl = event.metaKey || event.ctrlKey;
        
        if (!isCmdOrCtrl) return;

        // Cmd/Ctrl + F : Recherche
        if (event.key === 'f' || event.key === 'F') {
            event.preventDefault();
            this.showView('search');
            setTimeout(() => {
                document.getElementById('search-input').focus();
            }, 100);
            this.showAlert('Vue Recherche activée');
        }

        // Cmd/Ctrl + A : Administration
        if (event.key === 'a' || event.key === 'A') {
            event.preventDefault();
            this.showView('admin');
            this.showAlert('Vue Administration activée');
        }

        // Échap : Fermer les modals
        if (event.key === 'Escape') {
            const modal = document.getElementById('exercise-modal');
            if (modal.classList.contains('active')) {
                Admin.closeExerciseModal();
            }
        }
    }
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    app.init();
    document.addEventListener('keydown', (e) => app.handleKeyboardShortcuts(e));
});
