document.getElementById("calculateBtn").addEventListener("click", function () {
    // Get input values
    const s1 = parseFloat(document.getElementById("subject1").value);
    const s2 = parseFloat(document.getElementById("subject2").value);
    const s3 = parseFloat(document.getElementById("subject3").value);
    const s4 = parseFloat(document.getElementById("subject4").value);
    const s5 = parseFloat(document.getElementById("subject5").value);
  
    // Check for invalid input
    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
      document.getElementById("result").innerText = "Please enter valid numbers for all subjects.";
      return;
    }
  
    // Calculate total and average
    const total = s1 + s2 + s3 + s4 + s5;
    const average = total / 5;
  
    // Determine grade
    let grade = "";
    if (average >= 90) {
      grade = "A+";
    } else if (average >= 80) {
      grade = "A";
    } else if (average >= 70) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    // Display result on the page
    document.getElementById("result").innerText = 
      `Total Marks: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`;

  // Display result on alert box
    alert(`Total Marks: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`);

  });
  