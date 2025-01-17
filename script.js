    //* < ========== GMT Time script ========== -->

    function updateDateTime() {
        var now = new Date();
        var gmtMinus2Time = new Date(now.getTime() - (2 * 60 * 60 * 1000));
        var datetimeElement = document.getElementById('datetime');
        datetimeElement.textContent = 'GMT +3 ' + gmtMinus2Time.toLocaleString();
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    //* < ========== Menu Section script ========== -->

document.addEventListener("DOMContentLoaded", function() {
    var firstMenuItem = document.querySelector('.menuItem');
    firstMenuItem.classList.add('active');
    var firstSectionId = firstMenuItem.getAttribute('onclick').match(/toggleMenu\('([^']+)'\)/)[1];
    var firstSection = document.getElementById(firstSectionId);
    firstSection.classList.add('active');
});
function toggleMenu(sectionId) {
    var menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });
    var clickedMenuItem = document.querySelector('[onclick="toggleMenu(\'' + sectionId + '\')"]');
    clickedMenuItem.classList.add('active');
    var sections = document.querySelectorAll('.menuContent');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}

//* Historic Section to show

function openHistoricSection() {
    // Remove 'active' from all menu items
    var menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });
    // Add 'active' to the Historic menu item
    var historicMenuItem = document.querySelector('[onclick="toggleMenu(\'menuHistoric\')"]');
    historicMenuItem.classList.add('active');
    // Remove 'active' from all sections
    var sections = document.querySelectorAll('.menuContent');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    // Add 'active' to the Historic section
    var historicSection = document.getElementById('menuHistoric');
    historicSection.classList.add('active');
}

//* Recharge Section to show

function openAgentSection() {
    // Remove 'active' from all menu items
    var menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });
    // Add 'active' to the Agent menu item
    var agentMenuItem = document.querySelector('[onclick="toggleMenu(\'menuRecharge\')"]');
    agentMenuItem.classList.add('active');
    // Remove 'active' from all sections
    var sections = document.querySelectorAll('.menuContent');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    // Add 'active' to the Agent section
    var agentSection = document.getElementById('menuRecharge');
    agentSection.classList.add('active');
}


    //* < ========== Menu Market Section script ========== -->

    // Sample match data with start times (replace with actual dynamic data)
    const matches = [
        { id: 1, teams: ["Manchester City FC", "Real Madrid CF"], image1: "Match/match 1.png", image2: "Match/match 2.png", tournament: ["UEFA European"], startDate: new Date('2024-07-29T08:30:00') },
        { id: 2, teams: ["FC Barcelona", "Manchester United FC"], image1: "Match/match 3.png", image2: "Match/match 4.png", tournament: ["Copa América"], startDate: new Date('2024-07-29T09:30:00') },
        { id: 3, teams: ["Liverpool FC", "Paris Saint-Germain"], image1: "Match/match 5.png", image2: "Match/match 6.png", tournament: ["F a Cup"], startDate: new Date('2024-07-29T09:30:00') },
        { id: 4, teams: ["FC Bayern Munich", "Arsenal FC"], image1: "Match/match 7.png", image2: "Match/match 8.png", tournament: ["Africa Cup of Nations"], startDate: new Date('2024-07-29T10:00:00') },
        { id: 5, teams: ["Tottenham Hotspur FC", "Chelsea FC"], image1: "Match/match 9.png", image2: "Match/match 10.png", tournament: ["FIFA World Cup"], startDate: new Date('2024-07-29T10:30:00') },
        { id: 6, teams: ["Juventus FC", "Club Atletico de Madrid"], image1: "Match/match 11.png", image2: "Match/match 12.jpg", tournament: ["UEFA Europa League"], startDate: new Date('2024-07-29T11:00:00') },
        { id: 7, teams: ["Borussia Dortmund", "FC Internazionale Milano"], image1: "Match/match 13.png", image2: "Match/match 14.png", tournament: ["English Premier League"], startDate: new Date('2024-07-29T12:00:00') },
        { id: 8, teams: ["AC Milan", "Atletico Petro Luanda"], image1: "Match/match 15.png", image2: "Match/match 16.png", tournament: ["Asian Cup"], startDate: new Date('2024-07-29T11:30:00') },
        { id: 9, teams: ["West Ham United FC", "Newcastle United FC"], image1: "Match/match 18.png", image2: "Match/match 1.png", tournament: ["Conmebol"], startDate: new Date('2024-07-29T12:00:00') },
        { id: 10, teams: ["SSC Napoli", "RasenBallsport Leipzig"], image1: "Match/match 19.png", image2: "Match/match 20.png", tournament: ["Copa Castell"], startDate: new Date('2024-07-29T12:00:00') },
        { id: 11, teams: ["Aston Villa FC", "AS Roma"], image1: "Match/match 21.png", image2: "Match/match 22.png", tournament: ["Aaha Gold Cup"], startDate: new Date('2024-07-29T12:00:00') },
        { id: 12, teams: ["Eintracht Frankfurt", "Everton FC"], image1: "Match/match 23.png", image2: "Match/match 24.png", tournament: ["Afc"], startDate: new Date('2024-07-29T12:00:00') },
        { id: 13, teams: ["Bayer 04 Leverkusen", "Sevilla FC"], image1: "Match/match 25.png", image2: "Match/match 26.png", tournament: ["Caf"], startDate: new Date('2024-07-29T12:15:00') },
        { id: 14, teams: ["Brighton & Hove Albion FC", "Leicester City"], image1: "Match/match 27.png", image2: "Match/match 28.png", tournament: ["Concacaf"], startDate: new Date('2024-07-29T12:30:00') },
        { id: 15, teams: ["Olympique De Marseille", "Crystal Palace"], image1: "Match/match 29.png", image2: "Match/match 30.png", tournament: ["Confederations Cup"], startDate: new Date('2024-07-29T12:45:00') },
        { id: 16, teams: ["AFC Ajax", "Olympique Lyonnais"], image1: "Match/match 31.png", image2: "Match/match 32.png", tournament: ["Ofc"], startDate: new Date('2024-07-29T12:45:00') },
        { id: 17, teams: ["Wolverhampton Wanderers FC", "Leeds United"], image1: "Match/match 33.png", image2: "Match/match 34.png", tournament: ["The Summer Olympics"], startDate: new Date('2024-07-29T13:00:00') },
        { id: 18, teams: ["Real Betis", "Borussia Monchengladbach"], image1: "Match/match 35.png", image2: "Match/match 36.png", tournament: ["The Summer Olympics"], startDate: new Date('2024-07-29T13:00:00') },
        { id: 19, teams: ["Villarreal CF", "Real Sociedad"], image1: "Match/match 37.png", image2: "Match/match 38.png", tournament: ["English Premier League"], startDate: new Date('2024-07-29T13:30:00') },
        { id: 20, teams: ["VfL Wolfsburg", "1.FC Koln"], image1: "Match/match 39.png", image2: "Match/match 40.png", tournament: ["English Premier League"], startDate: new Date('2024-07-29T14:00:00') },
        { id: 21, teams: ["SC Freiburg", "SL Benfica"], image1: "Match/match 41.png", image2: "Match/match 42.png", tournament: ["FIFA Cup"], startDate: new Date('2024-07-29T14:30:00') },
        { id: 22, teams: ["Celtic FC", "Brentford"], image1: "Match/match 43.png", image2: "Match/match 44.png", tournament: ["UEFA Europa League"], startDate: new Date('2024-07-29T15:00:00') },
        { id: 23, teams: ["Athletic de Bilbao", "SS Lazio SpA"], image1: "Match/match 45.png", image2: "Match/match 46.png", tournament: ["English Premier League"], startDate: new Date('2024-07-29T15:30:00') },
        { id: 24, teams: ["1.FC Union Berlin", "Valencia CF"], image1: "Match/match 47.png", image2: "Match/match 48.jpg", tournament: ["FIFA Cup"], startDate: new Date('2024-07-29T16:00:00') },
        { id: 25, teams: ["FC Porto", "Fulham FC"], image1: "Match/match 49.png", image2: "Match/match 50.png", tournament: ["UEFA Europa League"], startDate: new Date('2024-07-29T16:30:00') },
    ];
    
    const today = new Date();
    matches.forEach(match => {
        const time = match.startDate.toTimeString().split(" ")[0]; // Extract the time portion
        match.startDate = new Date(`${today.toISOString().split('T')[0]}T${time}`); // Combine today's date with the time
    });

// User balance
const userBalance = 100000; // Example user balance

// Selecting tabs and contents
const tabs = document.querySelectorAll('.marketListTab');
const contents = document.querySelectorAll('.marketListContent');

// Adding click event listeners to tabs
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.dataset.content).classList.add('active');
        filterMatches(this.dataset.content);
    });
});

// Function to filter matches based on date filter
function filterMatches(filter) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1);
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (7 - today.getDay()));
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    let filteredMatches = matches.filter(match => match.startDate >= today);

    if (filter === 'today') {
        filteredMatches = filteredMatches.filter(match => match.startDate.toDateString() === today.toDateString());
    } else if (filter === 'tomorrow') {
        filteredMatches = filteredMatches.filter(match => match.startDate.toDateString() === tomorrow.toDateString());
    } else if (filter === 'this-week') {
        filteredMatches = filteredMatches.filter(match => match.startDate >= startOfWeek && match.startDate <= endOfWeek);
    } else if (filter === 'this-month') {
        filteredMatches = filteredMatches.filter(match => match.startDate >= startOfMonth && match.startDate <= endOfMonth);
    }

    // Sort matches by start date
    filteredMatches.sort((a, b) => a.startDate - b.startDate);

    displayMatches(filteredMatches, filter);
}

// Function to display matches in the UI
function displayMatches(matches, filter) {
    const containerId = filter === 'all' ? 'all-matches' : `${filter}-matches`;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    matches.forEach(match => {
        const matchBox = document.createElement('div');
        matchBox.classList.add('match-box');
        matchBox.dataset.matchId = match.id;
        matchBox.innerHTML = `
            <div class="menuListMatches">
                <div class="menuListMatch" onclick="openBetDetailsPopup(${match.id})">
                    <div class="menuListMatchTop">
                        <p>${formatDate(match.startDate)}</p>
                        <div class="menuListMatchTopBox">
                            <p>${match.tournament}</p>
                        </div>
                        <p>${formatTime(match.startDate)}</p>
                    </div>
                    <div class="menuListMatchBottom">
                        <div class="menuListMatchBottomTeams">
                            <div class="menuListMatchImgPlusTeam1">
                                <div class="menuListMatchImg">
                                    <img src="${match.image1}" alt="">
                                </div>
                                <div class="menuListMatchTeam">
                                    <p>${match.teams[0]}</p>
                                </div>
                            </div>
                            <div>VS</div>
                            <div class="menuListMatchImgPlusTeam2">
                                <div class="menuListMatchTeam">
                                    <p>${match.teams[1]}</p>
                                </div>
                                <div class="menuListMatchImg">
                                    <img src="${match.image2}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        container.appendChild(matchBox);
    });
}

// Function to format date as "DD-MM-YYYY"
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to format time as "HH:MM"
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to open bet details popup
function openBetDetailsPopup(matchId) {
    const popupOverlay = document.getElementById('popup-overlay');
    const betDetailsPopup = document.getElementById('bet-details-popup');

    // Permanent values for projected scores, profit, and available volume
    const projectedScores = [
        "1-2", "3-1", "2-4", "0-3", "1-5",
        "2-1", "3-2", "0-2", "4-1", "2-3",
        "1-3", "4-2", "0-1", "3-0", "2-0"
    ];

    const match = matches.find(m => m.id === matchId);
    const teams = match.teams.join(" vs ");
    const matchDate = formatDate(match.startDate);
    const matchTime = formatTime(match.startDate);

    // Create table HTML with permanent values
    let tableHTML = `
        <table>
            <tr>
                <th>Projected Score</th>
                <th>Profit Percentage</th>
                <th>Available Volume</th>
                <th>Action</th>
            </tr>
    `;

    projectedScores.forEach(score => {
        const profitPercentage = (Math.random() * (2 - 1) + 1).toFixed(1); // Random profit percentage (1.0-5.0)
        const availableVolume = Math.floor(Math.random() * 1000) + 500; // Random volume available (500-1500)

        tableHTML += `
            <tr>
                <td>${score}</td>
                <td>${profitPercentage}</td>
                <td>${availableVolume}</td>
                <td>
                    <button onclick="openBetPopup('${teams}', '${matchDate}', '${matchTime}', ${profitPercentage}, ${availableVolume})">Place Bet</button>
                </td>
            </tr>
        `;
    });

    tableHTML += '</table>';

    // Set popup content
    betDetailsPopup.innerHTML = `
        <div class="popup-header">
            <p>${teams}</p>
            <p>${matchDate} &nbsp; at &nbsp; ${matchTime}</p>
        </div>
        ${tableHTML}
        <button class="close-btn" onclick="closeBetDetailsPopup()">Close</button>
    `;

    // Display popup
    betDetailsPopup.style.display = 'block';
    popupOverlay.style.display = 'block';
}

// Function to close bet details popup
function closeBetDetailsPopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    const betDetailsPopup = document.getElementById('bet-details-popup');
    betDetailsPopup.style.display = 'none';
    popupOverlay.style.display = 'none';
}

// Function to open bet popup
function openBetPopup(teams, matchDate, matchTime, profitPercentage, availableVolume) {
    const betPopup = document.getElementById('bet-popup');
    const popupOverlay = document.getElementById('popup-overlay');

    // Display match details and profit percentage in bet popup
    betPopup.innerHTML = `
        <div class="popup-header">
            <p>${teams}</p>
            <p>${matchDate} &nbsp; at &nbsp; ${matchTime}</p>
        </div>
        <div class="betPopupContent">
            <div class="betPopupContent1">
                <label for="bet-amount">Bet Amount: </label>
                <input type="text" id="bet-amount" name="bet-amount" placeholder="Please enter amount">
            </div>
            <div class="betPopupContent2">
                <p>Profit Percentage </p>
                <span id="profit-percentage"> ${profitPercentage}% =</span>
            </div>
            <div class="betPopupContent3">
                <p>Projected Profit </p> 
                <span id="projected-profit">0.00 $</span>
            </div>
        </div>
        <div class="bet-buttons">
            <button onclick="addBetAmount(1000)">+ 1000</button>
            <button onclick="addBetAmount(10000)">+ 10,000</button>
            <button onclick="addBetAmount(100000)">+ 100,000</button>
            <button onclick="addBetAmount(${userBalance})">Total</button>
        </div>
        <button class="placeBet" onclick="placeBet()">Place Bet</button>
        <button class="close-btn2" id="closeBtn2" onclick="closeBetPopup()">Close</button>
        <div class="popupAvaliableBalance">
            <p>Available Balance:</p>
            <span>${userBalance}$</span>
        </div>
    `;

    // Add event listener to update projected profit as user enters bet amount
    document.getElementById('bet-amount').addEventListener('input', function() {
        const betAmount = parseFloat(this.value);
        const profitPercentage = parseFloat(document.getElementById('profit-percentage').textContent);
        if (!isNaN(betAmount) && !isNaN(profitPercentage)) {
            const projectedProfit = (betAmount * (profitPercentage / 100)).toFixed(2);
            document.getElementById('projected-profit').textContent = projectedProfit;
        } else {
            document.getElementById('projected-profit').textContent = '0.00';
        }
    });

    // Display popup
    betPopup.style.display = 'block';
    popupOverlay.style.display = 'block';
}

// Function to close bet popup
function closeBetPopup() {
    const betPopup = document.getElementById('bet-popup');
    const popupOverlay = document.getElementById('popup-overlay');
    betPopup.style.display = 'none';
    popupOverlay.style.display = 'none';
}

// Function to add predefined bet amount to bet input
function addBetAmount(amount) {
    const betAmountInput = document.getElementById('bet-amount');
    betAmountInput.value = amount;

    // Update projected profit
    const profitPercentage = parseFloat(document.getElementById('profit-percentage').textContent);
    const projectedProfit = (amount * (profitPercentage / 100)).toFixed(2);
    document.getElementById('projected-profit').textContent = projectedProfit;
}

// Function to place a bet
function placeBet() {
    const betAmount = parseInt(document.getElementById('bet-amount').value);
    const profitPercentage = parseFloat(document.getElementById('profit-percentage').textContent);
    if (isNaN(profitPercentage)) {
        alert('Invalid profit percentage');
        return;
    }
    const profitedAmount = (betAmount * (1 + profitPercentage / 100)).toFixed(2);

    // Display profit details in profit box after 2 minutes
    setTimeout(() => {
        displayProfit(betAmount, profitPercentage, profitedAmount);
    }, 1 * 60 * 1000); // 2 minutes

    closeBetPopup();
}

// Function to display profit in profit box and store in localStorage
function displayProfit(betAmount, profitPercentage, profitedAmount) {
    const profitTable = document.getElementById('profit-table');
    const currentTime = getCurrentTime();
    const currentDate = getCurrentDate(); // New function to get current date

    // Create a new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>$${betAmount}</td>
        <td>${profitPercentage}%</td>
        <td>${currentDate}</td>
        <td>${currentTime}</td>
        <td>$${profitedAmount}</td>`;

    // Append the new row to the table body
    const tableBody = profitTable.querySelector('tbody');
    tableBody.appendChild(newRow);

    // Store the new row data in localStorage
    const profitData = {
        id: profitTable.rows.length + 1,
        betAmount: betAmount,
        profitPercentage: profitPercentage,
        date: currentDate,
        time: currentTime,
        profitedAmount: profitedAmount
    };

    // Retrieve existing profit data from localStorage
    let existingProfitData = JSON.parse(localStorage.getItem('profitData')) || [];

    // Add the new profit data to existing data
    existingProfitData.push(profitData);

    // Store updated data back in localStorage
    localStorage.setItem('profitData', JSON.stringify(existingProfitData));
}

// Function to get current date as "DD-MM-YYYY"
function getCurrentDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to display profit data from localStorage on page load
function loadProfitData() {
    const profitTable = document.getElementById('profit-table');
    const tableBody = profitTable.querySelector('tbody');

    // Retrieve profit data from localStorage
    const storedProfitData = JSON.parse(localStorage.getItem('profitData')) || [];

    // Display stored profit data in the table
    storedProfitData.forEach(data => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>$${data.betAmount}</td>
            <td>${data.profitPercentage}%</td>
            <td>${data.date}</td>
            <td>${data.time}</td>
            <td>$${data.profitedAmount}</td>
        `;
        tableBody.appendChild(newRow);
    });
}
// Function to clear localStorage (for testing purposes)
function clearLocalStorage() {
    localStorage.removeItem('profitData');
}
// Call loadProfitData on page load to display stored profit data
loadProfitData();

// Function to get current time as "HH:MM:SS"
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Initialize display
filterMatches('all');


    //* < ========== Personal Section script ========== -->

    document.addEventListener('DOMContentLoaded', function() {
        const totalDepositLimit = 6000;
        const totalInviteLimit = 15;
        const totalTradeLimit = 17700;
        let userDeposit = parseFloat(localStorage.getItem('userDeposit')) || 0;
        let userInvites = parseFloat(localStorage.getItem('userInvites')) || 0;
        let userTrades = parseFloat(localStorage.getItem('userTrades')) || 0;
        function updateProgressBar(id, value, totalLimit) {
            const progress = Math.min((value / totalLimit) * 100, 100);
            const progressBar = document.getElementById(id + '-progress');
            const limitText = document.getElementById(id + '-limit');
            progressBar.style.width = progress + '%';
            limitText.textContent = `${value} / ${totalLimit}`;
        }
        updateProgressBar('deposit', userDeposit, totalDepositLimit);
        updateProgressBar('invite', userInvites, totalInviteLimit);
        updateProgressBar('trade', userTrades, totalTradeLimit);
    });


    //* < ========== Dollar Conversion script ========== -->

    function convertToPKR() {
        const usdAmount = document.getElementById('usdAmount').value;
        const conversionRate = 290;
        const pkrAmount = usdAmount * conversionRate;
        document.getElementById('result').textContent = `$${usdAmount} USD is equal to ${pkrAmount} PKR`;
    }

    //* < ========== Promotion Section script ========== -->

    document.addEventListener('DOMContentLoaded', (event) => {
        const teamMembers = [
            { name: "John Doe", joinedDate: "2024-01-15", deposit: 100, reward: 10 },
            { name: "Jane Smith", joinedDate: "2024-01-17", deposit: 150, reward: 15 },
            { name: "Bob Johnson", joinedDate: "2024-01-20", deposit: 200, reward: 20 }
        ];

        const tableBody = document.getElementById('teamTableBody');
        let totalDeposit = 0;

        teamMembers.forEach(member => {
            totalDeposit += member.deposit;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${member.name}</td>
                <td>${member.joinedDate}</td>
                <td>$${member.deposit}</td>
                <td>$${member.reward}</td>
            `;
            tableBody.appendChild(row);
        });

        document.getElementById('totalDeposit').textContent = `Total Deposit Amount: $${totalDeposit}`;
    });

    function copyReferralLink() {
        const referralLink = document.getElementById('referralLink');
        referralLink.select();
        document.execCommand('copy');
        showPopup('Referral link copied to clipboard!');
    }

    function shareOnSocialMedia(platform) {
        const referralLink = document.getElementById('referralLink').value;
        let url = '';
        switch(platform) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(referralLink)}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`;
                break;
        }
        window.open(url, '_blank');
    }

    function showPopup(message) {
        const popup = document.getElementById('promotionpopup');
        popup.textContent = message;
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    }

    //* < ========== Announcement Section script ========== -->

    function showMessage(messageId) {
        const messages = {
            message1: "This is the full message for Announcement 1.",
            message2: "This is the full message for Announcement 2.",
            message3: "This is the full message for Announcement 3."
        };
        document.getElementById('messageContent').innerText = messages[messageId];
    }


    //* < ========== Regestration page script ========== -->

    function activateButton(buttonId, contentId) {
        const buttons = document.querySelectorAll('.toggle-button');
        const contents = document.querySelectorAll('.content');
            buttons.forEach(button => {
            button.classList.remove('active');
        });
        contents.forEach(content => {
            content.classList.remove('active');
        });
        const activeButton = document.getElementById(buttonId);
        const activeContent = document.getElementById(contentId);
        activeButton.classList.add('active');
        activeContent.classList.add('active');
    }


    //* < ========== Hover Popup script ========== -->

    document.addEventListener('DOMContentLoaded', (event) => {
        const hoverContainer = document.querySelector('.hover-container');
        const popup = document.querySelector('.hoverPopup');
        hoverContainer.addEventListener('mouseenter', () => {
            popup.style.display = 'block';
        });
        hoverContainer.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });
    });


    //* < ========== depositPlusWithdraw Table script ========== -->

function showContent(section) {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    contents.forEach(function(content) {
        content.classList.remove('active');
    });
    document.querySelector('.tab[onclick="showContent(\'' + section + '\')"]').classList.add('active');
    document.getElementById(section).classList.add('active');
}

    //* < ========== depositPlusWithdraw Form script ========== -->

    document.addEventListener("DOMContentLoaded", function() {
        // Ensure the deposit form is shown by default
        showForm('depositForm');
    });
    
    function showForm(formId) {
        var forms = document.querySelectorAll('.formSection');
        forms.forEach(function(form) {
            form.classList.remove('active');
        });
        var formToShow = document.getElementById(formId);
        formToShow.classList.add('active');
    }

    function copyFinanceId() {
        var financeIdInput = document.getElementById('financeId');
        financeIdInput.select();
        document.execCommand('copy');
        alert('Finance ID copied to clipboard: ' + financeIdInput.value);
    }