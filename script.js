function convertAlgorithmToJava(algorithm) {
    var javaCode = "import java.util.Scanner;\n\n";
    javaCode += "public class Main {\n";
    javaCode += "    public static void main(String[] args) {\n";
    var lines = algorithm.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.startsWith("Lire")) {
            var variable = line.substring(5).trim();
            javaCode += "Scanner scanner = new Scanner(System.in);\n";
            javaCode += "System.out.print(\"Enter the value of " + variable + ": \");\n";
            javaCode += "int " + variable + " = scanner.nextInt();\n";
        } else if (line.startsWith("Afficher")) {
            javaCode += "System.out.println(\"" + line.substring(9) + "\");\n";
        } else {
            javaCode += "        // " + line + "\n";
        }
    }
    javaCode += "    }\n";
    javaCode += "}\n";
    return javaCode;
}


function convertAlgorithmToPython(algorithm) {
    var pythonCode = "";
    var lines = algorithm.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.startsWith("Lire")) {
            var variable = line.substring(5).trim();
            pythonCode += variable + " = int(input(\"Enter the value of " + variable + ": \"))\n";
        } else if (line.startsWith("Afficher")) {
            pythonCode += "print(\"" + line.substring(9) + "\")\n";
        } else {
            pythonCode += " " + line + "\n";
        }
    }
    return pythonCode;
}

function convertAlgorithm() {
    var algorithm = document.getElementById("algorithm").value;
    var language = document.getElementById("language").value;
    var convertedCode = '';
    if (language === 'java') {
        convertedCode = convertAlgorithmToJava(algorithm);
    } else if (language === 'python') {
        convertedCode = convertAlgorithmToPython(algorithm);
    }
    document.getElementById("convertedCode").value = convertedCode;
    document.getElementById("output").style.display = "block";
}

function toggleLanguage() {
    var languageSelect = document.getElementById("language");
    var currentLanguage = languageSelect.value;
    var button = document.getElementById("toggleButton");
    if (currentLanguage === 'java') {
        languageSelect.value = 'python';
        button.textContent = 'Switch to Java';
    } else if (currentLanguage === 'python') {
        languageSelect.value = 'java';
        button.textContent = 'Switch to Python';
    }
    convertAlgorithm();
}

function downloadCode() {
    var code = document.getElementById("convertedCode").value;
    var format = document.getElementById("format").value;
    var filename = "converted_code." + format;
    var blob = new Blob([code], { type: 'text/plain' });

    if (format === 'pdf') {
        alert("PDF conversion not implemented yet.");
    } else if (format === 'txt' || format === 'word') {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
