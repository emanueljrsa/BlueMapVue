export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "मेन्यू",
        tooltip: "मेन्यू"
    },
    maps: {
        title: "नक्शे",
        button: "नक्शे",
        tooltip: "मानचित्र-सूची"
    },
    markers: {
        title: "मार्करों",
        button: "मार्करों",
        tooltip: "मार्कर-सूची",
        marker: "मार्कर | मार्करों",
        markerSet: "मार्कर-सेट | मार्कर-सेट",
        searchPlaceholder: "खोज...",
        followPlayerTitle: "प्लेयर को फॉलो करें"
    },
    settings: {
        title: "सेटिंग्स",
        button: "सेटिंग्स"
    },
    goFullscreen: {
        button: "पूर्णस्क्रीन मोड"
    },
    resetCamera: {
        button: "कैमरा रीसेट करें",
        tooltip: "कैमरा और स्थिति रीसेट करें"
    },
    updateMap: {
        button: "नक्शा अपडेट करें",
        tooltip: "टाइल कैश साफ़ करें"
    },
    lighting: {
        title: "प्रकाश",
        dayNightSwitch: {
            tooltip: "दिन हो या रात"
        },
        sunlight: "सूरज की रोशनी",
        ambientLight: "परिवेश प्रकाश"
    },
    resolution: {
        title: "संकल्प",
        high: "उच्च (SSAA, x2)",
        normal: "सामान्य (देशी, x1)",
        low: "कम (अप स्केलिंग, x0.5)"
    },
    freeFlightControls: {
        title: "मुक्त उड़ान नियंत्रण",
        mouseSensitivity: "माउस-संवेदनशीलता",
        invertMouseY: "माउस-संवेदनशीलता"
    },
    renderDistance: {
        title: "रेंडर दूरी",
        hiresLayer: "परत काम देता है",
        lowersLayer: "निचली परत"
    },
    theme: {
        title: "थीम",
        default: "डिफ़ॉल्ट (सिस्टम / ब्राउज़र)",
        dark: "डार्क",
        light: "प्रकाश"
    },
    debug: {
        button: "डिबग"
    },
    resetAllSettings: {
        button: "सभी सेटिंग्स रीसेट करें"
    },
    players: {
        title: "खिलाड़ी",
        tooltip: "प्लेयर-सूची"
    },
    compass: {
        tooltip: "कम्पास / फेस नॉर्थ"
    },
    controls: {
        title: "देखें / नियंत्रण",
        perspective: {
            button: "परिप्रेक्ष्य",
            tooltip: "परिप्रेक्ष्य-दृश्य"
        },
        flatView: {
            button: "फ्लैट",
            tooltip: "ऑर्थोग्राफिक / फ्लैट-व्यू",
        },
        freeFlight: {
            button: "फ्री-फ्लाइट",
            tooltip: "फ्री-फ्लाइट / दर्शक मोड"
        }
    },
    language: {
        title: "भाषा",
    },
    blockTooltip: {
        block: "ब्लॉक",
        position: "स्थिति",
        chunk: "चंक",
        region: {
            region: "क्षेत्र",
            file: "फ़ाइल"
        },
        light: {
            light: "प्रकाश",
            sun: "सूर्य",
            block: "ब्लॉक",
        }
    },
    info: {
        title: "जानकारी",
        button: "जानकारी",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>माउस-नियंत्रण:</h2>
	<table>
		<tr><th>कदम</th><td><kbd>बाएँ क्लिक करें</kbd> + खींचें</td></tr>
		<tr><th>ज़ूम</th><td><kbd>माउसव्हील</kbd> (स्क्रॉल)</td></tr>
		<tr><th>घुमाएँ / झुकाव</th><td><kbd>राइट-क्लिक करें</kbd> + खींचें</td></tr>
	</table>
</p>
<p>
	<h2>कीबोर्ड पर नियंत्रण:</h2>
	<table>
		<tr><th>कदम</th><td><kbd>wasd</kbd> / <kbd>तीर कुंजी</kbd></td></tr>
		<tr><th>ज़ूम</th><td>Numpad: <kbd>या</kbd>/<kbd>इन</kbd> होम <kbd>इन</kbd>/<kbd>होम</kbd></td></tr>
		<tr><th>घुमाएँ / झुकाव</th><td><kbd>बाईं-Alt</kbd> + <kbd>wasd</kbd> / <kbd>तीर कुंजी</kbd> या <kbd>हटाएं</kbd>/<kbd>अंत</kbd>/<kbd>पृष्ठ</kbd>/<kbd>पृष्ठ के नीचे</kbd></td></tr>
	</table>
</p>
<p>
	<h2>स्पर्श नियंत्रण:</h2>
	<table>
		<tr><th>कदम</th><td>टच + खींचें</td></tr>
		<tr><th>ज़ूम</th><td>दो उंगलियों के साथ स्पर्श + चुटकी</td></tr>
		<tr><th>घुमाएँ / झुकाव</th><td>दो उंगलियों के साथ टच + घुमाएँ/ऊपर / नीचे ले जाएँ</td></tr>
	</table>
</p>
<br><hr>
<p>
	का उपयोग कर उत्पन्न <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
};
