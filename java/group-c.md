# Group C

## Assignment No. 16
**Title:** Write a small Java application to develop Banking Application in which user deposits the amount Rs 1000.00 and then withdraws Rs 400.00 and Rs 300.00. Develop a GUI using Swing.

**Objective:**
1. To develop a simple banking application using Java Swing.
2. To implement deposit and withdrawal operations with balance updates in GUI.

**Theory:**
Swing is Java's standard GUI toolkit used to create windows, labels, buttons, and event-driven programs. In this assignment, `JFrame` is used as the main window and `ActionListener` handles button-click events. Balance is maintained as a variable and updated after each transaction.

**Code:**
```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class BankingAppGUI extends JFrame implements ActionListener {
	private double balance = 0.0;

	private final JLabel balanceLabel;
	private final JTextArea logArea;
	private final JButton depositButton;
	private final JButton withdraw400Button;
	private final JButton withdraw300Button;

	public BankingAppGUI() {
		setTitle("Banking Application");
		setSize(500, 350);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLocationRelativeTo(null);

		balanceLabel = new JLabel("Current Balance: Rs 0.00");
		balanceLabel.setFont(new Font("Arial", Font.BOLD, 16));

		depositButton = new JButton("Deposit Rs 1000");
		withdraw400Button = new JButton("Withdraw Rs 400");
		withdraw300Button = new JButton("Withdraw Rs 300");

		depositButton.addActionListener(this);
		withdraw400Button.addActionListener(this);
		withdraw300Button.addActionListener(this);

		JPanel buttonPanel = new JPanel();
		buttonPanel.add(depositButton);
		buttonPanel.add(withdraw400Button);
		buttonPanel.add(withdraw300Button);

		logArea = new JTextArea(10, 40);
		logArea.setEditable(false);
		JScrollPane scrollPane = new JScrollPane(logArea);

		add(balanceLabel, BorderLayout.NORTH);
		add(buttonPanel, BorderLayout.CENTER);
		add(scrollPane, BorderLayout.SOUTH);
	}

	private void updateBalanceLabel() {
		balanceLabel.setText(String.format("Current Balance: Rs %.2f", balance));
	}

	private void withdraw(double amount) {
		if (amount <= balance) {
			balance -= amount;
			logArea.append(String.format("Withdrawn: Rs %.2f\n", amount));
			updateBalanceLabel();
		} else {
			logArea.append(String.format("Insufficient balance for withdrawal of Rs %.2f\n", amount));
		}
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == depositButton) {
			balance += 1000.0;
			logArea.append("Deposited: Rs 1000.00\n");
			updateBalanceLabel();
		} else if (e.getSource() == withdraw400Button) {
			withdraw(400.0);
		} else if (e.getSource() == withdraw300Button) {
			withdraw(300.0);
		}
	}

	public static void main(String[] args) {
		SwingUtilities.invokeLater(() -> {
			BankingAppGUI app = new BankingAppGUI();
			app.setVisible(true);
		});
	}
}
```

**Output:**
```
GUI window opens with buttons:
1) Deposit Rs 1000
2) Withdraw Rs 400
3) Withdraw Rs 300

Transaction Log:
Deposited: Rs 1000.00
Withdrawn: Rs 400.00
Withdrawn: Rs 300.00

Final Balance shown on screen: Rs 300.00
```

**Conclusion:**
In this way, a simple Swing-based banking application was implemented with event handling for deposit and withdrawal, and dynamic balance updates.

---

## Assignment No. 17
**Title:** Implement insert and display operations using JDBC Connectivity.

**Objective:**
1. To connect Java application with MySQL database using JDBC.
2. To perform insert and display operations on database records.

**Theory:**
JDBC (Java Database Connectivity) is an API used to connect Java applications with relational databases. `Connection` establishes database connectivity, `PreparedStatement` performs parameterized insert queries, and `ResultSet` is used to read selected records.

**Code:**
```java
import java.sql.*;

public class JDBCInsertDisplay {
	private static final String URL = "jdbc:mysql://localhost:3306/college_db";
	private static final String USER = "root";
	private static final String PASSWORD = "root";

	public static void main(String[] args) {
		try (Connection con = DriverManager.getConnection(URL, USER, PASSWORD);
			 Statement st = con.createStatement()) {

			st.executeUpdate("CREATE TABLE IF NOT EXISTS students ("
					+ "id INT PRIMARY KEY AUTO_INCREMENT,"
					+ "name VARCHAR(50),"
					+ "branch VARCHAR(30))");

			insertStudent(con, "Aditi", "CSE");
			insertStudent(con, "Rahul", "IT");

			System.out.println("\n--- Student Records ---");
			displayStudents(con);

		} catch (SQLException e) {
			System.out.println("Database error: " + e.getMessage());
		}
	}

	private static void insertStudent(Connection con, String name, String branch) throws SQLException {
		String sql = "INSERT INTO students(name, branch) VALUES(?, ?)";
		try (PreparedStatement ps = con.prepareStatement(sql)) {
			ps.setString(1, name);
			ps.setString(2, branch);
			ps.executeUpdate();
			System.out.println("Record inserted: " + name + ", " + branch);
		}
	}

	private static void displayStudents(Connection con) throws SQLException {
		String sql = "SELECT id, name, branch FROM students";
		try (PreparedStatement ps = con.prepareStatement(sql);
			 ResultSet rs = ps.executeQuery()) {

			while (rs.next()) {
				System.out.println(rs.getInt("id") + " | "
						+ rs.getString("name") + " | "
						+ rs.getString("branch"));
			}
		}
	}
}
```

**Output:**
```
Record inserted: Aditi, CSE
Record inserted: Rahul, IT

--- Student Records ---
1 | Aditi | CSE
2 | Rahul | IT
```

**Conclusion:**
In this way, JDBC connectivity was used successfully to insert and display database records in a Java application.

---

## Assignment No. 18
**Title:** Implement CRUD operations using JDBC Connectivity.

**Objective:**
1. To perform Create, Read, Update, and Delete operations using JDBC.
2. To understand structured database interaction in Java applications.

**Theory:**
CRUD operations are core data management operations in database systems. JDBC provides `PreparedStatement` for secure query execution and `ResultSet` for reading data. Using separate methods for each CRUD operation improves modularity and maintainability.

**Code:**
```java
import java.sql.*;

public class JDBCCrudDemo {
	private static final String URL = "jdbc:mysql://localhost:3306/college_db";
	private static final String USER = "root";
	private static final String PASSWORD = "root";

	public static void main(String[] args) {
		try (Connection con = DriverManager.getConnection(URL, USER, PASSWORD);
			 Statement st = con.createStatement()) {

			st.executeUpdate("CREATE TABLE IF NOT EXISTS products ("
					+ "id INT PRIMARY KEY,"
					+ "name VARCHAR(50),"
					+ "price DOUBLE)");

			createRecord(con, 101, "Keyboard", 899.0);
			createRecord(con, 102, "Mouse", 499.0);

			System.out.println("\nAfter Insert:");
			readRecords(con);

			updateRecord(con, 102, 549.0);
			System.out.println("\nAfter Update:");
			readRecords(con);

			deleteRecord(con, 101);
			System.out.println("\nAfter Delete:");
			readRecords(con);

		} catch (SQLException e) {
			System.out.println("Database error: " + e.getMessage());
		}
	}

	private static void createRecord(Connection con, int id, String name, double price) throws SQLException {
		String sql = "INSERT INTO products(id, name, price) VALUES (?, ?, ?)";
		try (PreparedStatement ps = con.prepareStatement(sql)) {
			ps.setInt(1, id);
			ps.setString(2, name);
			ps.setDouble(3, price);
			ps.executeUpdate();
			System.out.println("Inserted -> " + id + " | " + name + " | " + price);
		}
	}

	private static void readRecords(Connection con) throws SQLException {
		String sql = "SELECT id, name, price FROM products";
		try (PreparedStatement ps = con.prepareStatement(sql);
			 ResultSet rs = ps.executeQuery()) {

			while (rs.next()) {
				System.out.println(rs.getInt("id") + " | "
						+ rs.getString("name") + " | "
						+ rs.getDouble("price"));
			}
		}
	}

	private static void updateRecord(Connection con, int id, double newPrice) throws SQLException {
		String sql = "UPDATE products SET price = ? WHERE id = ?";
		try (PreparedStatement ps = con.prepareStatement(sql)) {
			ps.setDouble(1, newPrice);
			ps.setInt(2, id);
			ps.executeUpdate();
			System.out.println("Updated product ID " + id + " with new price " + newPrice);
		}
	}

	private static void deleteRecord(Connection con, int id) throws SQLException {
		String sql = "DELETE FROM products WHERE id = ?";
		try (PreparedStatement ps = con.prepareStatement(sql)) {
			ps.setInt(1, id);
			ps.executeUpdate();
			System.out.println("Deleted product ID " + id);
		}
	}
}
```

**Output:**
```
Inserted -> 101 | Keyboard | 899.0
Inserted -> 102 | Mouse | 499.0

After Insert:
101 | Keyboard | 899.0
102 | Mouse | 499.0

Updated product ID 102 with new price 549.0

After Update:
101 | Keyboard | 899.0
102 | Mouse | 549.0

Deleted product ID 101

After Delete:
102 | Mouse | 549.0
```

**Conclusion:**
In this way, all CRUD operations were implemented successfully using JDBC connectivity with proper query execution and result handling.

---

## Assignment No. 19
**Title:** Design a user input form using Swing components. Implement an `ActionListener` to display user input on button click.

**Objective:**
1. To design a GUI input form using Swing components.
2. To implement event handling using `ActionListener` and display entered data.

**Theory:**
Form-based GUI applications are built with components such as `JLabel`, `JTextField`, `JButton`, and `JTextArea`. When the submit button is clicked, `ActionListener` captures the text field values and displays them in output area.

**Code:**
```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class UserInputForm extends JFrame implements ActionListener {
	private final JTextField nameField;
	private final JTextField emailField;
	private final JTextField mobileField;
	private final JTextArea outputArea;
	private final JButton displayButton;

	public UserInputForm() {
		setTitle("User Input Form");
		setSize(450, 350);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLocationRelativeTo(null);
		setLayout(new GridLayout(5, 2, 8, 8));

		add(new JLabel("Name:"));
		nameField = new JTextField();
		add(nameField);

		add(new JLabel("Email:"));
		emailField = new JTextField();
		add(emailField);

		add(new JLabel("Mobile:"));
		mobileField = new JTextField();
		add(mobileField);

		displayButton = new JButton("Display Input");
		displayButton.addActionListener(this);
		add(displayButton);

		outputArea = new JTextArea();
		outputArea.setEditable(false);
		add(new JScrollPane(outputArea));
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		String name = nameField.getText();
		String email = emailField.getText();
		String mobile = mobileField.getText();

		outputArea.setText("Name: " + name + "\n"
				+ "Email: " + email + "\n"
				+ "Mobile: " + mobile);
	}

	public static void main(String[] args) {
		SwingUtilities.invokeLater(() -> {
			UserInputForm form = new UserInputForm();
			form.setVisible(true);
		});
	}
}
```

**Output:**
```
GUI Form Input:
Name = Arnav
Email = arnav@example.com
Mobile = 9876543210

Displayed in output area after button click:
Name: Arnav
Email: arnav@example.com
Mobile: 9876543210
```

**Conclusion:**
In this way, a Swing user input form was created and user-entered data was successfully displayed using `ActionListener` on button click.

---

## Assignment No. 20
**Title:** Develop a basic calculator application using Swing.

**Objective:**
1. To design a calculator GUI using Swing components.
2. To implement arithmetic operations through button event handling.

**Theory:**
A calculator GUI uses a display component and a grid of buttons for digits and operators. Event handling captures user inputs and performs arithmetic calculations. The program stores the first operand, operator, and second operand to evaluate expressions.

**Code:**
```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SimpleCalculator extends JFrame implements ActionListener {
	private final JTextField display;
	private double firstNumber = 0;
	private String operator = "";
	private boolean startNewNumber = true;

	public SimpleCalculator() {
		setTitle("Basic Calculator");
		setSize(320, 420);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLocationRelativeTo(null);
		setLayout(new BorderLayout());

		display = new JTextField("0");
		display.setFont(new Font("Arial", Font.BOLD, 24));
		display.setHorizontalAlignment(JTextField.RIGHT);
		display.setEditable(false);
		add(display, BorderLayout.NORTH);

		JPanel buttonPanel = new JPanel(new GridLayout(4, 4, 5, 5));
		String[] buttons = {
				"7", "8", "9", "/",
				"4", "5", "6", "*",
				"1", "2", "3", "-",
				"C", "0", "=", "+"
		};

		for (String text : buttons) {
			JButton button = new JButton(text);
			button.setFont(new Font("Arial", Font.BOLD, 20));
			button.addActionListener(this);
			buttonPanel.add(button);
		}

		add(buttonPanel, BorderLayout.CENTER);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		String command = e.getActionCommand();

		if (command.charAt(0) >= '0' && command.charAt(0) <= '9') {
			if (startNewNumber || display.getText().equals("0")) {
				display.setText(command);
				startNewNumber = false;
			} else {
				display.setText(display.getText() + command);
			}
		} else if (command.equals("C")) {
			firstNumber = 0;
			operator = "";
			display.setText("0");
			startNewNumber = true;
		} else if (command.equals("=")) {
			double secondNumber = Double.parseDouble(display.getText());
			double result = 0;

			switch (operator) {
				case "+": result = firstNumber + secondNumber; break;
				case "-": result = firstNumber - secondNumber; break;
				case "*": result = firstNumber * secondNumber; break;
				case "/":
					if (secondNumber == 0) {
						JOptionPane.showMessageDialog(this, "Cannot divide by zero");
						display.setText("0");
						startNewNumber = true;
						return;
					}
					result = firstNumber / secondNumber;
					break;
				default:
					result = secondNumber;
			}

			display.setText(String.valueOf(result));
			startNewNumber = true;
		} else {
			firstNumber = Double.parseDouble(display.getText());
			operator = command;
			startNewNumber = true;
		}
	}

	public static void main(String[] args) {
		SwingUtilities.invokeLater(() -> {
			SimpleCalculator calc = new SimpleCalculator();
			calc.setVisible(true);
		});
	}
}
```

**Output:**
```
Sample calculations performed in GUI:
12 + 8 = 20.0
9 * 7 = 63.0
25 / 5 = 5.0
```

**Conclusion:**
In this way, a basic calculator was successfully developed using Swing, implementing arithmetic operations through event-driven programming.
