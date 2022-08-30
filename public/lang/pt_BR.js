export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Menu",
        tooltip: "Menu"
    },
    maps: {
        title: "Mapas",
        button: "Mapas",
        tooltip: "Lista de Mapas"
    },
    markers: {
        title: "Marcadores",
        button: "Marcadores",
        tooltip: "Lista de Marcadores",
        marker: "marcador | marcadores",
        markerSet: "marcador definido | marcadores definidos",
        searchPlaceholder: "Procurar...",
        followPlayerTitle: "Seguir Jogador"
    },
    settings: {
        title: "Configurações",
        button: "Configurações"
    },
    goFullscreen: {
        button: "Tela Cheia"
    },
    resetCamera: {
        button: "Resetar Câmera",
        tooltip: "Reseta a Posição e Câmera"
    },
    updateMap: {
        button: "Recarregar Mapa",
        tooltip: "Limpa o cache do mapa e recarrega"
    },
    lighting: {
        title: "Luminosidade",
        dayNightSwitch: {
            tooltip: "Dia/Noite"
        },
        sunlight: "Luz Solar",
        ambientLight: "Luz Ambiente"
    },
    resolution: {
        title: "Resolução",
        high: "Alta (SSAA, x2)",
        normal: "Normal (Nativa, x1)",
        low: "Baixa (Upscaling, x0.5)"
    },
    freeFlightControls: {
        title: "Controles do Voo Livre",
        mouseSensitivity: "Sensibilidade do Mouse",
        invertMouseY: "Inverter eixo Y"
    },
    renderDistance: {
        title: "Distânciade Renderização",
        hiresLayer: "Camada de Alta Res.",
        lowersLayer: "Camada de Baixa Res.",
        loadHiresWhileMoving: "Carregar Alta Res. enquanto se move",
        off: "Desligado"
    },
    theme: {
        title: "Tema",
        default: "Padrão (Sistema/Navegador)",
        dark: "Escuro",
        light: "Claro"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Resetar todas as Configurações"
    },
    players: {
        title: "Jogadores",
        tooltip: "Lista de Jogadores"
    },
    compass: {
        tooltip: "Bússola / Apontar ao Norte"
    },
    controls: {
        title: "Visualização / Controles",
        perspective: {
            button: "Perspectiva",
            tooltip: "Visualização em Perspectiva"
        },
        flatView: {
            button: "Plano",
            tooltip: "Ortográfica / Visualização Plana",
        },
        freeFlight: {
            button: "Voo Livre",
            tooltip: "Voo Livre / Modo Espectador"
        }
    },
    language: {
        title: "Linguagem",
    },
    blockTooltip: {
        block: "Bloco",
        position: "Posição",
        chunk: "Chunk",
        region: {
            region: "Região",
            file: "File"
        },
        light: {
            light: "Luz",
            sun: "Sol",
            block: "Bloco",
        }
    },
    info: {
        title: "Info",
        button: "Info",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Mouse-Controles:</h2>
	<table>
		<tr><th>mover</th><td><kbd>left-click</kbd> + segurar</td></tr>
		<tr><th>zoom</th><td><kbd>mousewheel</kbd> (scroll)</td></tr>
		<tr><th>rotacionar / tilt</th><td><kbd>right-click</kbd> + drag</td></tr>
	</table>
</p>
<p>
	<h2>Controles de Teclado:</h2>
	<table>
		<tr><th>mover</th><td><kbd>wasd</kbd> / <kbd>arrow-keys</kbd></td></tr>
		<tr><th>zoom</th><td>Numpad: <kbd>+</kbd>/<kbd>-</kbd> or <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>rotacionar / tilt</th><td><kbd>Left-Alt</kbd> + <kbd>wasd</kbd> / <kbd>arrow-keys</kbd> or <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Controles de Toque:</h2>
	<table>
		<tr><th>move</th><td>toque + drag</td></tr>
		<tr><th>zoom</th><td>toque com dois dedos + pinça</td></tr>
		<tr><th>rotacionar / tilt</th><td>toque com dois dedos + rotacionar / mova para cima/baixo</td></tr>
	</table>
</p>
<br><hr>
<p>
	 Esse mapa foi gerando com &#9829; usando <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
};
