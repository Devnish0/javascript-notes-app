# Simple To-Do List App

todo_list = []

def show_menu():
    print("\n📋 TO-DO LIST MENU")
    print("1. View Tasks")
    print("2. Add Task")
    print("3. Mark Task as Done")
    print("4. Delete Task")
    print("5. Exit")

def view_tasks():
    if not todo_list:
        print("😴 Your to-do list is empty.")
    else:
        print("\n📝 Your Tasks:")
        for idx, task in enumerate(todo_list, start=1):
            status = "✅" if task['done'] else "❌"
            print(f"{idx}. {task['task']} [{status}]")

def add_task():
    task = input("Enter a new task: ")
    todo_list.append({"task": task, "done": False})
    print("✅ Task added!")

def mark_done():
    view_tasks()
    try:
        num = int(input("Enter task number to mark as done: "))
        if 1 <= num <= len(todo_list):
            todo_list[num-1]['done'] = True
            print("✅ Task marked as done!")
        else:
            print("⚠️ Invalid task number.")
    except ValueError:
        print("❌ Please enter a number.")

def delete_task():
    view_tasks()
    try:
        num = int(input("Enter task number to delete: "))
        if 1 <= num <= len(todo_list):
            removed = todo_list.pop(num-1)
            print(f"🗑️ Deleted: {removed['task']}")
        else:
            print("⚠️ Invalid task number.")
    except ValueError:
        print("❌ Please enter a number.")

# App loop
while True:
    show_menu()
    choice = input("Choose an option (1-5): ")
    
    if choice == '1':
        view_tasks()
    elif choice == '2':
        add_task()
    elif choice == '3':
        mark_done()
    elif choice == '4':
        delete_task()
    elif choice == '5':
        print("👋 Exiting To-Do app. Stay productive!")
        break
    else:
        print("⚠️ Invalid choice. Try again.")

