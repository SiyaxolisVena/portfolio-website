
function closeMenu() {
    document.getElementById("menu-toggle").checked = false;
}

const chatbotIcon = document.getElementById('chatbotIcon');
const chatbot = document.getElementById('chatbot');
const minimizeBtn = document.getElementById('minimizeBtn');
const closeBtn = document.getElementById('closeBtn');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbox = document.querySelector('.chatbox');


let inactivityTimeout;
let warningTimeout;
let warningActive = false;
// Function to clear chat
function clearChat() {
chatBox.innerHTML = ''; // Clear chat messages
}

function showWarningMessage() {
if (!warningActive) {
addChatMessage("Are you still there? Reply with Yes within 30 seconds to continue the conversation.", 'incoming');
warningActive = true;

warningTimeout = setTimeout(() => {
    clearChat();
    chatbot.style.display = 'none'; // Close chatbot
    warningActive = false; // Reset warning state
}, 30 * 1000); // 30 seconds
}
}
function resetTimeout() {
clearTimeout(inactivityTimeout);
clearTimeout(warningTimeout); // Clear any existing warning timeout
warningActive = false; // Reset warning state

inactivityTimeout = setTimeout(() => {
showWarningMessage(); // Show warning after 2 minutes
}, 0.2 * 60 * 1000); // 2 minutes in milliseconds
}
 
// Toggle Chatbot
chatbotIcon.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
    resetTimeout();
});
 
// Minimize Chatbot
minimizeBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
    clearChat();
});



const chatBox = document.querySelector('.chatbox');
                const inputDiv = document.createElement('div');
                inputDiv.classList.add('input-container');
                document.querySelector('.chatbot').appendChild(inputDiv);
           
           
                const botReplies = {
                    "hello": "Hi there! How can I assist you?",
                    "hi": "Hi there! How can I assist you?",
                    "tell us about yourself": "I'm a highly skilled software developer with over 2 years of experience in front-end and back-end application development. I'm proficient in Angular, React, Node.js, C#, and SQL, and passionate about building scalable and robust solutions.",
                    "what are your core competencies?": "I excel in problem-solving, debugging, web development, API integration, and testing.",
                    "what is your professional experience?": "I worked at Hollard Insurance as a Junior Software Developer, creating front-end applications using Angular and React and improving application stability. As a Software Developer Intern, I collaborated on user-friendly interfaces and implemented secure systems.",
                    "what is your educational background?": "I hold a Bachelor of Science in Computer Science from Walter Sisulu University, with majors in Computer Science, Statistics, and Applied Mathematics.",
                    "do you have any certifications?": "Yes, I have the DP-900 Azure Data Fundamentals certification, showcasing my skills in data storage, processing, security, and visualization in Azure.",
                    "what soft skills do you bring?": "I am collaborative, creative, detail-oriented, and always strive to align solutions with client visions.",
                    "what are your contact details?": "You can reach me at 0717304980 or via email at siyaxolisavena@gmail.com. Feel free to connect with me on LinkedIn: https://www.linkedin.com/in/siyaxolisa-vena-b2bb96171/",
                    "hi, what do you do?": "Hey! I'm a software developer specializing in creating both front-end and back-end applications using technologies like Angular, React, and Node.js.",
                    "what kind of projects have you worked on?": "I’ve worked on projects like building user-friendly web interfaces and optimizing backend systems for companies like Hollard Insurance.",
                    "do you have experience with databases?": "Yes, I’m skilled in working with SQL and MySQL, creating secure and efficient database solutions.",
                    "what programming languages do you know?": "I’m proficient in C#, JavaScript, and SQL, among others.",
                    "are you good at debugging?": "Absolutely! Debugging is one of my core strengths. I’ve resolved critical issues to improve system performance.",
                    "do you have any certifications?": "Yep! I’ve got the DP-900 Azure Data Fundamentals certification, so I know my way around data management and security in Azure.",
                    "what’s your educational background?": "I studied Computer Science at Walter Sisulu University, majoring in Computer Science, Statistics, and Applied Mathematics.",
                    "what kind of companies have you worked for?": "I’ve worked at Hollard Insurance as a Junior Software Developer and as a Software Developer Intern.",
                    "can you design websites?": "Yes! I’ve designed and developed web applications using Angular and React with a focus on user experience.",
                    "do you know about cloud technologies?": "I do! I’ve learned about data storage, processing, and visualization in Azure during my certification and projects.",
                    "how can I reach you?": "You can call me at 0717304980 or email me at siyaxolisavena@gmail.com. I’m also on LinkedIn: https://www.linkedin.com/in/siyaxolisa-vena-b2bb96171/",
                    "what makes you different from other developers?": "I focus on both the technical and user experience side of things. I’m also highly detail-oriented and committed to delivering solutions that align with client goals.",
                    "do you have any leadership experience?": "I’ve worked collaboratively in teams, taking initiative to implement features and drive improvements.",
                    "default": "I'm sorry, I didn't understand that. Could you rephrase?"
                };
           
                sendBtn.addEventListener('click', () => {
                    const userText = userInput.value.trim();
                    if (userText) {
                        if (warningActive) {
                            // Reset warning if user replies after the warning
                            clearTimeout(warningTimeout);
                            warningActive = false;
                        }
                        addChatMessage(userText, 'outgoing');
                        setTimeout(() => {
                            const botResponse = botReplies[userText.toLowerCase()] || botReplies["default"];
                            addChatMessage(botResponse, 'incoming');
                        }, 1000);
                    }
                    userInput.value = '';
                    resetTimeout(); // Reset timeout after interaction
                });
                
                function addChatMessage(message, type) {
                    const chatMessage = document.createElement('li');
                    chatMessage.classList.add('chat', type);
                    chatMessage.innerHTML = `<p>${message}</p>`;
                    chatBox.appendChild(chatMessage);
                    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
                    resetTimeout(); // Reset timeout on each message
                }