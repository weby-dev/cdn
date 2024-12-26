        // Enhanced clipboard and notification functionality
        function copyToClipboard(elementId) {
            const textarea = document.getElementById(elementId);
            textarea.select();
            
            try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'Copied!' : 'Copy failed';
                showNotification(msg);
            } catch (err) {
                showNotification('Copy failed');
            }
        }

        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.remove('hidden');
            
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 2000);
        }

        // Prevent form resubmission on page refresh
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
