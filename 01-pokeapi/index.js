async function onInit() {
    const $ = (id) => document.getElementById(id)

    const URL = "https://pokeapi.co/api/v2/pokemon"
    const searchInput = document.getElementById("searchInput");

    async function getData(url = URL) {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("No se pudo cargar: " + url)
        }

        return await response.json()
    }

    const container = $("container")
    const prevBtn = $("prevBtn")
    const nextBtn = $("nextBtn")

    if (!container) {
        console.log("Error: No hay container")
        return
    }

    let nextUrl = null
    let prevUrl = null

    function PokemonCardComponent(pokemon) {
        const element = document.createElement("article")

        const types = pokemon.types
            .map((item) => item.type.name)
            .join(", ")

        const abilities = pokemon.abilities
            .filter((item) => !item.is_hidden)
            .map((item) => item.ability.name)
            .join(", ")

        const stats = pokemon.stats
            .map((item) => `
                <li>
                    <span class="capitalize">${item.stat.name}</span>:
                    <strong>${item.base_stat}</strong>
                </li>
            `)
            .join("")

        const image =
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default

        element.className =
            "rounded-3xl border-2 border-slate-800 bg-slate-50 p-5 shadow-md"

        element.innerHTML = `
            <img
                src="${image}"
                alt="${pokemon.name}"
                class="mx-auto h-36 w-36 object-contain"
            >

            <h2 class="mt-2 text-center text-xl font-bold capitalize text-blue-900">
                #${pokemon.id} ${pokemon.name}
            </h2>

            <div class="mt-4 space-y-2 text-sm text-slate-700">
                <p><strong>Tipo:</strong> <span class="capitalize">${types}</span></p>
                <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                <p><strong>Habilidades:</strong> <span class="capitalize">${abilities}</span></p>

                <div>
                    <strong>Estadísticas:</strong>
                    <ul class="mt-1 grid grid-cols-2 gap-x-2 text-xs">
                        ${stats}
                    </ul>
                </div>
            </div>
        `

        return element
    }

    async function renderPokemons(results) {
        container.innerHTML = `
            <p class="col-span-full text-center text-slate-500">
                Cargando pokémons...
            </p>
        `

        try {
            const pokemonsDetails = await Promise.all(
                results.map((item) => getData(item.url))
            )

            container.innerHTML = ""

            pokemonsDetails.forEach((pokemon) => {
                const pokemonCard = PokemonCardComponent(pokemon)
                container.appendChild(pokemonCard)
            })
        } catch (error) {
            console.error(error)

            container.innerHTML = `
                <p class="col-span-full rounded-lg border border-red-400 bg-red-100 p-4 text-center text-red-700">
                    Error al cargar los pokémons. Abre la consola del navegador para ver el error.
                </p>
            `
        }
    }

    function updateButtons() {
        if (prevBtn) prevBtn.disabled = !prevUrl
        if (nextBtn) nextBtn.disabled = !nextUrl
    }

    async function loadPage(url) {
        const response = await getData(url)

        nextUrl = response.next
        prevUrl = response.previous

        await renderPokemons(response.results)
        updateButtons()
    }

    let retardEscriure;
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();

            clearTimeout(retardEscriure);

            retardEscriure = setTimeout(async () => {
                if (query === "") {
                    if (prevBtn) prevBtn.style.display = "inline-block";
                    if (nextBtn) nextBtn.style.display = "inline-block";
                    await loadPage(URL);
                    return;
                }

                if (prevBtn) prevBtn.style.display = "none";
                if (nextBtn) nextBtn.style.display = "none";

                container.innerHTML = `<p class="col-span-full text-center text-slate-500">Buscando Pokémon...</p>`;

                try {
                    const pokemon = await getData(`${URL}/${query}`);
                    container.innerHTML = "";
                    const pokemonCard = PokemonCardComponent(pokemon);
                    container.appendChild(pokemonCard);
                } catch (error) {
                    
                    container.innerHTML = `
                        <p class="col-span-full rounded-lg border border-amber-400 bg-amber-100 p-4 text-center text-amber-700">
                            No se encontró ningún Pokémon con el nombre o ID: "${query}"
                        </p>
                    `;
                }
            }, 500);
        });
    }

    if (prevBtn) {
        prevBtn.onclick = async () => {
            if (prevUrl) {
                await loadPage(prevUrl)
            }
        }
    }

    if (nextBtn) {
        nextBtn.onclick = async () => {
            if (nextUrl) {
                await loadPage(nextUrl)
            }
        }
    }

    await loadPage(URL)
}

onInit()