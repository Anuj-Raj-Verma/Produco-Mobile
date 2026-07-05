# ✅ Produco: The All-In-One Personal Operating System

Produco is a comprehensive, offline-first Progressive Web Application (PWA) designed to manage every aspect of a student's life. From tracking rigorous academic attendance and competitive exam prep to managing college fees, daily diets, and financial transactions, Produco serves as a unified digital dashboard. 

Built with a mobile-first, Material Design aesthetic, Produco operates entirely in the browser using `LocalStorage`, ensuring maximum speed, offline capability, and absolute data privacy.

---

## 🚀 Key Highlights
* **Progressive Web App (PWA):** Fully installable on iOS, Android, and Desktop. Works 100% offline.
* **Privacy-First:** No databases, no servers. All data lives directly on your device.
* **Smart Insights Engine:** An automated dashboard that analyzes your data and alerts you about low attendance, pending fees, digital burnout, and slipping diets.
* **Rich Exports:** Built-in PDF generation for financial reports, college fee receipts, and study notes using `jsPDF`.

---

## 📱 Feature Breakdown

### 1. 🏠 Smart Dashboard & Insights
The central hub of the app, providing a bird's-eye view of your day.
* **Dynamic Greetings:** Changes based on the time of day.
* **Daily Summary:** Shows a quick fraction of completed vs. pending tasks.
* **Smart Insights Feed:** A dynamic alert system that analyzes your data across all modules:
  * **Attendance Alerts:** Warns you if any subject drops below 75% attendance.
  * **Fee Deadlines:** Alerts you if a college fee payment is due within the next 7 days or is overdue.
  * **Digital Imbalance:** Warns you if your average screen time exceeds your study time over a 3-day period.
  * **Diet Check-ins:** Nudges you if your diet consistency drops below 50%.
  * **Monthly Backup Reminder:** Prompts you to download and archive your study notes on the 1st and 2nd of every month.

### 2. 📅 Calendar & Agenda
A built-in task manager and event logger tied to a monthly calendar.
* **Visual Indicators:** Calendar dots instantly show which days have logged tasks or events.
* **Daily To-Do Lists:** Add up to 3 priority tasks per day with quick-check boxes.
* **Notes & Events:** A dedicated text area for logging daily reflections or specific events.

### 3. 🕒 Lifestyle Tracker
Designed to monitor burnout and physical health.
* **7-Day Rolling Averages:** A summary card at the top calculates your average study, screen, and workout hours over the past week.
* **Daily Logging:** Log Wake Time, Sleep Time, Study Hours, Screen Time, and Workout Hours.
* **Visual Rings:** Dynamic progress rings show how much data you've logged each day.
* **Smart Scrolling:** Automatically scrolls to "Today's" date when the tab is opened.

### 4. 🍏 Diet Consistency
A customizable daily checklist to keep physical health on track.
* **Custom Targets:** Track Water intake, Protein, No Sugar, specific meals, etc.
* **Monthly Consistency Chart:** A dynamic `Chart.js` doughnut chart showing your overall success vs. missed targets for the month (smartly ignores future dates).
* **Smart Scrolling:** Automatically snaps to the current day upon opening.

### 5. 🎓 Attendance Tracker
A highly granular academic tracker built for university life.
* **Semester Management:** Create, name, and switch between multiple semesters to keep data organized over the years.
* **Independent Timetable Editor:** Edit individual 1-hour slots (e.g., 9:00 AM - 10:00 AM).
* **Smart Merging:** The "Today" view automatically merges consecutive identical subjects into single, clean blocks (e.g., 9:00 AM - 1:00 PM).
* **Status Tracking:** Mark classes as Present, Absent, or Cancelled.
* **Advanced Analytics:** Automatically calculates your precise attendance percentage, how many "safe bunks" you have left, or exactly how many classes you need to attend to reach the 75% threshold.

### 6. 🏛️ Foundation (Gov Exam Prep)
A dedicated module for competitive exam preparation.
* **Daily Consistency:** Track daily reading habits (Articles & News).
* **Weekly Goals:** Track targets for Puzzles, Quant, and Social Science chapters.
* **Subject Progress:** Track completed chapters vs. total chapters for major subjects (Polity, History, Economy, etc.) with visual progress bars.
* **Knowledge Vault (Notes):** * Add rich text notes categorized by subject.
  * Auto-archives: Displays only the 6 most recent notes on the main screen with a "View All" bottom sheet to prevent clutter.
  * **PDF Export & Wipe:** Export all notes to a beautifully formatted PDF. If exported at the beginning of the month, the app smartly offers to wipe the digital UI to start the new month fresh.

### 7. 💸 Transactions & Finance
A clean, straightforward income and expense tracker.
* **Add Transactions:** Log Income (+) or Expenses (-) with amounts and labels.
* **Balance Calculation:** Instantly calculates total income, total expense, and net balance for the viewed month.
* **PDF Reports:** Download a fully formatted monthly transaction report with color-coded income/expenses.

### 8. 🏛️ College Fees
Keep track of massive university expenses without the stress.
* **Categorization:** Split fees into "Academic" (by semester) and "Mess" (by selected months/year).
* **Status Tracking:** Mark fees as "Pending" or "Paid".
* **Total Aggregation:** A dedicated, highlighted card sums up your "Total Paid Overall" across all categories.
* **PDF Export:** Export your entire fee history, including Transaction IDs and Dates, to a PDF.

### 9. 🧠 Mood Tracker & 🔥 Streaks
* **Mood Tracker:** Log days as Good, Normal, or Bad, visualized on a monthly grid and a doughnut chart.
* **Streaks:** Build habits with customizable target days (e.g., 21, 30, 90). Edit streak names and goals dynamically. Delete or Undo accidental taps.

### 10. ⚙️ Data Management
* **Backup Data:** Export your entire `LocalStorage` database as a `.json` file to safely back up your life.
* **Restore Data:** Upload a previous backup to restore your data on a new device or browser.

---

## 🛠️ Technical Architecture

* **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+).
* **UI/UX:** Custom CSS implementing Google's Material Design 3 (MD3) guidelines, featuring dark/light mode toggles, bottom sheets, full-width edge-to-edge layouts (`viewport-fit=cover`), and smooth CSS animations.
* **PWA:** Utilizes `manifest.json` and a Service Worker (`sw.js`) for aggressive offline caching and native app-like installation on mobile home screens.
* **Libraries Used:**
  * `Chart.js` (for rendering Diet and Mood doughnut charts).
  * `jsPDF` & `jspdf-autotable` (for generating tabular PDF reports).

---

## 📥 Installation & Setup

Because Produco is a client-side PWA, there is no backend setup required.

**To run locally:**
1. Clone the repository.
2. Open `index.html` in any modern web browser.
*(Note: Some features like CSS `mask-image` or Service Workers may require a local server like VS Code Live Server to bypass CORS restrictions).*

**To install on a mobile device:**
1. Host the repository on a secure HTTPS server (e.g., GitHub Pages, Vercel, Netlify).
2. Visit the URL on your mobile device (Safari for iOS, Chrome for Android).
3. Tap **"Share" -> "Add to Home Screen"** (iOS) or **"Install App"** (Android).
4. Produco will now appear on your home screen as a native, edge-to-edge application!