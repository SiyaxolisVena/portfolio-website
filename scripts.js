
        function closeMenu() {
            document.getElementById("menu-toggle").checked = false;
        }

        const chatbotIcon = document.getElementById('chatbotIcon');
        const chatbot = document.getElementById('chatbot');
        const minimizeBtn = document.getElementById('minimizeBtn');
        const sendBtn = document.getElementById('sendBtn');
        const userInput = document.getElementById('userInput');
        const chatbox = document.querySelector('.chatbox');
         
        // Toggle Chatbot
        chatbotIcon.addEventListener('click', () => {
            chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
        });
         
        // Minimize Chatbot
        minimizeBtn.addEventListener('click', () => {
            chatbot.style.display = 'none';
        });
         
        const chatBox = document.querySelector('.chatbox');
                        const inputDiv = document.createElement('div');
                        inputDiv.classList.add('input-container');
                        document.querySelector('.chatbot').appendChild(inputDiv);
                   
                   
                        const botReplies = {
                            "hello": "Hi there! How can I assist you?",
                            "tell us about yourself": "I'm a Software developer with over 2 years of experience ",
                            "services": "I can guide you through your services, skills, or anything related to your portfolio.",
                            "contact": "You can reach out via the contact form or LinkedIn link on the page.",
                            "default": "I'm sorry, I didn't understand that. Could you rephrase?",
                        };
                   
                        sendBtn.addEventListener('click', () => {
                            const userText = userInput.value.trim();
                            if (userText) {
                                addChatMessage(userText, 'outgoing');
                                setTimeout(() => {
                                    const botResponse = botReplies[userText.toLowerCase()] || botReplies["default"];
                                    addChatMessage(botResponse, 'incoming');
                                }, 1000);
                            }
                            userInput.value = '';
                        });
                   
                        function addChatMessage(message, type) {
                            const chatMessage = document.createElement('li');
                            chatMessage.classList.add('chat', type);
                            chatMessage.innerHTML = `<p>${message}</p>`;
                            chatBox.appendChild(chatMessage);
                            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
                        }