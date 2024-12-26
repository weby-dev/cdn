        window.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            alert("Right-click is disabled on this page.");
        }, false);

        window.addEventListener('keydown', function (e) {
            if ((e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.metaKey && e.altKey && e.key === 'C') ||
                (e.ctrlKey || e.metaKey) && e.key === 'u') {
                e.preventDefault();
                alert("Inspect Element and View Source are disabled.");
            }
        });

        function copyToClipboard(text, button) {
            navigator.clipboard.writeText(text).then(function () {
                button.textContent = "Copied To Clipboard!";
                button.classList.add("copied");
                setTimeout(function () {
                    button.textContent = "Copy";
                    button.classList.remove("copied");
                }, 3000);
            }, function (err) {
                console.error('Failed to copy text: ', err);
            });
        }
