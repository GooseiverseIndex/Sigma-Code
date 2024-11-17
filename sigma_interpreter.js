// Sigma Code Interpreter in JavaScript
document.getElementById("runButton").addEventListener("click", runSigmaCode);

function runSigmaCode() {
    const codeInput = document.getElementById("codeInput").value.split("\n");
    const outputElement = document.getElementById("output");
    let variables = {}; // Store variables here
    let output = ""; // Collect output here

    // Process each line of Sigma Code
    codeInput.forEach((line) => {
        line = line.trim();

        if (line.startsWith("Hey computer, print this:")) {
            const message = line.split("Hey computer, print this:")[1].trim();
            output += evaluateExpression(message, variables) + "\n";
        } else if (line.startsWith("Let")) {
            const match = line.match(/Let (\w+) be (.+)\./);
            if (match) {
                const [_, varName, value] = match;
                variables[varName] = evaluateExpression(value, variables);
            }
        } else if (line.startsWith("What's")) {
            const match = line.match(/What's (\w+)\? It's (.+)\./);
            if (match) {
                const [_, varName, expression] = match;
                variables[varName] = evaluateExpression(expression, variables);
            }
        } else if (line.startsWith("Tell me")) {
            const varName = line.split("Tell me")[1].trim().replace(".", "");
            if (variables[varName] !== undefined) {
                output += variables[varName] + "\n";
            } else {
                output += `Variable '${varName}' is not defined.\n`;
            }
        } else if (line.startsWith("If")) {
            const match = line.match(/If (.+), say: "(.+)"/);
            if (match) {
                const [_, condition, message] = match;
                if (evaluateCondition(condition, variables)) {
                    output += message + "\n";
                }
            }
        } else if (line.startsWith("Otherwise, say:")) {
            const message = line.split("Otherwise, say:")[1].trim().replace(/"/g, "");
            output += message + "\n";
        }
    });

    // Update output section
    outputElement.textContent = output;
}

// Evaluate expressions (e.g., "x + 10")
function evaluateExpression(expression, variables) {
    try {
        Object.keys(variables).forEach((key) => {
            expression = expression.replace(new RegExp(`\\b${key}\\b`, "g"), variables[key]);
        });
        return eval(expression);
    } catch {
        return expression.replace(/"/g, ""); // Return as plain text if eval fails
    }
}

// Evaluate conditions (e.g., "x is greater than 10")
function evaluateCondition(condition, variables) {
    condition = condition
        .replace(/is greater than/g, ">")
        .replace(/is less than/g, "<")
        .replace(/is equal to/g, "==")
        .replace(/is not equal to/g, "!=");

    Object.keys(variables).forEach((key) => {
        condition = condition.replace(new RegExp(`\\b${key}\\b`, "g"), variables[key]);
    });

    try {
        return eval(condition);
    } catch {
        return false;
    }
}
