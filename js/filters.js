// ═══════════════════════════════════════════════════════════════════════════
// FILTERS.JS - Recherche et filtrage des exercices
// V20.12 - Ajout toggleAdvancedSearch()
// ═══════════════════════════════════════════════════════════════════════════

const Filters = {
    init() {
        this.renderFilters();
        this.filterExercises();
    },

    renderFilters() {
        // Zones
        const zonesContainer = document.getElementById('zones-filter');
        zonesContainer.innerHTML = app.categories.zones.map(zone => `
            <label class="checkbox-label">
                <input type="checkbox" value="${zone}" onchange="Filters.filterExercises()">
                <span>${zone}</span>
            </label>
        `).join('');

        // Types
        const typesContainer = document.getElementById('types-filter');
        typesContainer.innerHTML = app.categories.types.map(type => `
            <label class="checkbox-label">
                <input type="checkbox" value="${type}" onchange="Filters.filterExercises()">
                <span>${type}</span>
            </label>
        `).join('');

        // Matériel
        const materielContainer = document.getElementById('materiel-filter');
        materielContainer.innerHTML = app.categories.materiel.map(mat => `
            <label class="checkbox-label">
                <input type="checkbox" value="${mat}" onchange="Filters.filterExercises()">
                <span>${mat}</span>
            </label>
        `).join('');
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // V20.12 - NOUVELLE FONCTION : Afficher/masquer la recherche avancée
    // ═══════════════════════════════════════════════════════════════════════════
    toggleAdvancedSearch() {
        const advancedSearch = document.getElementById('advanced-search');
        advancedSearch.classList.toggle('hidden');
        
        // Annonce VoiceOver
        if (advancedSearch.classList.contains('hidden')) {
            app.showAlert('Recherche avancée masquée');
        } else {
            app.showAlert('Recherche avancée affichée');
        }
    },

    checkFiltersValidity() {
        const searchTerm = document.getElementById('search-input').value.trim();
        const hasZones = document.querySelectorAll('#zones-filter input:checked').length > 0;
        const hasTypes = document.querySelectorAll('#types-filter input:checked').length > 0;
        const hasMateriel = document.querySelectorAll('#materiel-filter input:checked').length > 0;
        
        const alert = document.getElementById('filter-alert');
        
        // Afficher alerte si Types ou Matériel cochés SANS zone ET sans recherche
        if ((hasTypes || hasMateriel) && !hasZones && !searchTerm) {
            alert.classList.remove('hidden');
        } else {
            alert.classList.add('hidden');
        }
    },

    filterExercises() {
        // Vérifier validité des filtres pour afficher alerte si besoin
        this.checkFiltersValidity();
        
        const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
        
        const selectedZones = Array.from(document.querySelectorAll('#zones-filter input:checked')).map(cb => cb.value);
        const selectedTypes = Array.from(document.querySelectorAll('#types-filter input:checked')).map(cb => cb.value);
        const selectedMateriel = Array.from(document.querySelectorAll('#materiel-filter input:checked')).map(cb => cb.value);

        // N'afficher aucun exercice si ni recherche textuelle ni zones sélectionnées
        if (!searchTerm && selectedZones.length === 0) {
            this.renderExercisesList([]);
            return;
        }

        let results = app.exercises;

        // Recherche textuelle
        if (searchTerm) {
            results = results.filter(ex => 
                ex.titre.toLowerCase().includes(searchTerm) ||
                ex.description.toLowerCase().includes(searchTerm) ||
                ex.zones.some(z => z.toLowerCase().includes(searchTerm)) ||
                ex.types.some(t => t.toLowerCase().includes(searchTerm))
            );
        }

        // 1er tamis : ZONES (mode OU)
        if (selectedZones.length > 0) {
            results = results.filter(ex => selectedZones.some(z => ex.zones.includes(z)));
        }

        // 2ème tamis : TYPES (mode OU uniquement)
        if (selectedTypes.length > 0) {
            results = results.filter(ex => selectedTypes.some(t => ex.types.includes(t)));
        }

        // 3ème tamis : MATÉRIEL (mode OU strict)
        if (selectedMateriel.length > 0) {
            results = results.filter(ex => {
                // "Sans matériel" = exercices avec materiel vide
                if (selectedMateriel.includes('Sans matériel') && ex.materiel.length === 0) {
                    return true;
                }
                // Autres matériels
                return selectedMateriel.some(m => m !== 'Sans matériel' && ex.materiel.includes(m));
            });
        }

        // Tri automatique : Zone puis Type
        results.sort((a, b) => {
            const zoneA = a.zones[0] || '';
            const zoneB = b.zones[0] || '';
            if (zoneA !== zoneB) {
                return zoneA.localeCompare(zoneB, 'fr');
            }
            const typeA = a.types[0] || '';
            const typeB = b.types[0] || '';
            return typeA.localeCompare(typeB, 'fr');
        });

        this.renderExercisesList(results);
    },

    renderExercisesList(exercises) {
        const container = document.getElementById('results-list');
        const count = document.getElementById('results-count');
        
        count.textContent = exercises.length;
        
        // Annonce VoiceOver
        const searchTerm = document.getElementById('search-input').value.trim();
        const selectedZones = Array.from(document.querySelectorAll('#zones-filter input:checked'));
        
        if (searchTerm || selectedZones.length > 0) {
            app.showAlert(`${exercises.length} exercice${exercises.length > 1 ? 's' : ''} trouvé${exercises.length > 1 ? 's' : ''}`);
        }

        if (exercises.length === 0) {
            if (!searchTerm && selectedZones.length === 0) {
                container.innerHTML = '<div class="empty-state">Utilisez la recherche par mot-clé ou sélectionnez au moins une zone du corps pour afficher des exercices.</div>';
            } else {
                container.innerHTML = '<div class="empty-state">Aucun exercice ne correspond à vos critères.</div>';
            }
            return;
        }

        container.innerHTML = exercises.map(ex => `
            <article class="exercise-card" role="listitem">
                <h3>${ex.titre}</h3>
                <p>${ex.description}</p>
                <div style="margin-bottom: 0.75rem;">
                    ${ex.zones.map(z => `<span class="badge badge-blue">${z}</span>`).join('')}
                    ${ex.types.map(t => `<span class="badge badge-green">${t}</span>`).join('')}
                    ${ex.materiel.length > 0 ? ex.materiel.map(m => `<span class="badge badge-purple">${m}</span>`).join('') : ''}
                </div>
                <div class="exercise-actions">
                    <button 
                        class="btn-secondary btn-small" 
                        onclick="PhotosViewer.open(${ex.id})"
                        aria-label="Voir les photos de l'exercice ${ex.titre}, ${ex.photos.length} photo${ex.photos.length > 1 ? 's' : ''} disponible${ex.photos.length > 1 ? 's' : ''}"
                    >
                        📷 Voir photo${ex.photos.length > 1 ? 's' : ''} (${ex.photos.length})
                    </button>
                    <button class="btn-primary btn-small" onclick="Document.addToProgram(${ex.id})" aria-label="Ajouter ${ex.titre} au programme">
                        ➕ Ajouter au programme
                    </button>
                </div>
            </article>
        `).join('');
    },

    resetFilters() {
        document.getElementById('search-input').value = '';
        document.querySelectorAll('#zones-filter input').forEach(cb => cb.checked = false);
        document.querySelectorAll('#types-filter input').forEach(cb => cb.checked = false);
        document.querySelectorAll('#materiel-filter input').forEach(cb => cb.checked = false);
        document.querySelector('input[name="types-mode"][value="OR"]').checked = true;
        this.filterExercises();
        app.showAlert('Filtres réinitialisés');
    }
};
