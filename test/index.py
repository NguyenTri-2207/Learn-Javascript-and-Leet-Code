import tkinter as tk
import time
import json
from datetime import datetime

class TimeTracker:
    def __init__(self):
        self.work_sessions = []
        self.break_sessions = []
        self.load_data()

    def load_data(self):
        try:
            with open('time_tracker.json', 'r') as file:
                data = json.load(file)
                self.work_sessions = [tuple(session) for session in data.get('work_sessions', [])]
                self.break_sessions = [tuple(session) for session in data.get('break_sessions', [])]
        except FileNotFoundError:
            self.work_sessions = []
            self.break_sessions = []

    def save_data(self):
        with open('time_tracker.json', 'w') as file:
            json.dump({
                'work_sessions': self.work_sessions,
                'break_sessions': self.break_sessions
            }, file)

    def start_work(self):
        self.start_time = time.time()
        self.start_time_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def end_work(self):
        end_time = time.time()
        self.work_sessions.append((self.start_time, end_time))
        self.save_data()

    def start_break(self):
        self.start_time = time.time()
        self.start_time_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def end_break(self):
        end_time = time.time()
        self.break_sessions.append((self.start_time, end_time))
        self.save_data()

    def get_report(self):
        total_work = sum(end - start for start, end in self.work_sessions)
        total_break = sum(end - start for start, end in self.break_sessions)
        work_times = [(datetime.fromtimestamp(start).strftime("%Y-%m-%d %H:%M:%S"), 
                       datetime.fromtimestamp(end).strftime("%Y-%m-%d %H:%M:%S")) 
                      for start, end in self.work_sessions]
        break_times = [(datetime.fromtimestamp(start).strftime("%Y-%m-%d %H:%M:%S"), 
                        datetime.fromtimestamp(end).strftime("%Y-%m-%d %H:%M:%S")) 
                       for start, end in self.break_sessions]
        return total_work / 3600, total_break / 3600, work_times, break_times  # trả về giờ và thời gian phiên

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Ứng dụng Theo dõi Thời gian")
        self.geometry("600x1000")

        self.tracker = TimeTracker()

        self.start_work_button = tk.Button(self, text="Bắt đầu làm việc", command=self.start_work)
        self.start_work_button.pack(pady=5)

        self.end_work_button = tk.Button(self, text="Kết thúc làm việc", command=self.end_work)
        self.end_work_button.pack(pady=5)

        self.start_break_button = tk.Button(self, text="Bắt đầu nghỉ ngơi", command=self.start_break)
        self.start_break_button.pack(pady=5)

        self.end_break_button = tk.Button(self, text="Kết thúc nghỉ ngơi", command=self.end_break)
        self.end_break_button.pack(pady=5)

        self.report_button = tk.Button(self, text="Xem báo cáo", command=self.show_report)
        self.report_button.pack(pady=5)

        self.status_label = tk.Label(self, text="")
        self.status_label.pack(pady=10)

        self.report_text = tk.Text(self, height=10, width=50)
        self.report_text.pack(pady=10)

    def start_work(self):
        self.tracker.start_work()
        self.update_status("Đang làm việc...")

    def end_work(self):
        self.tracker.end_work()
        self.update_status("Phiên làm việc đã kết thúc.")

    def start_break(self):
        self.tracker.start_break()
        self.update_status("Đang nghỉ ngơi...")

    def end_break(self):
        self.tracker.end_break()
        self.update_status("Phiên nghỉ ngơi đã kết thúc.")

    def show_report(self):
        total_work, total_break, work_times, break_times = self.tracker.get_report()
        report_message = f"Tổng thời gian làm việc: {total_work:.2f} giờ\n" \
                         f"Tổng thời gian nghỉ ngơi: {total_break:.2f} giờ\n\n" \
                         "Thời gian làm việc:\n"
        for start, end in work_times:
            report_message += f"  - Bắt đầu: {start}, Kết thúc: {end}\n"

        report_message += "\nThời gian nghỉ ngơi:\n"
        for start, end in break_times:
            report_message += f"  - Bắt đầu: {start}, Kết thúc: {end}\n"

        self.report_text.delete(1.0, tk.END)  # Xóa nội dung cũ
        self.report_text.insert(tk.END, report_message)  # Chèn báo cáo mới

    def update_status(self, message):
        self.status_label.config(text=message)

if __name__ == "__main__":
    app = App()
    app.mainloop()
