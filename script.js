let subjects = [];
let editIndex = -1;

function addSubject() {
    const subjectInput = document.getElementById('subject').value;
    const gradeInput = document.getElementById('grade').value;
    const creditInput = document.getElementById('credit').value;

    if (editIndex === -1) {
        subjects.push({ subject: subjectInput, grade: gradeInput, credit: creditInput });
    } else {
        subjects[editIndex] = { subject: subjectInput, grade: gradeInput, credit: creditInput };
        editIndex = -1;
    }

    document.getElementById('subject').value = '';
    document.getElementById('credit').value = '';
    displaySubjects();
}

function displaySubjects() {
    const subjectList = document.getElementById('subjectList');
    subjectList.innerHTML = '';

    subjects.forEach((subject, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subject.subject}</td>
            <td>${subject.grade}</td>
            <td>${subject.credit}</td>
            <td><button onclick="editSubject(${index})">Edit</button> <button onclick="deleteSubject(${index})">Delete</button></td>
        `;
        subjectList.appendChild(row);
    });
}

function editSubject(index) {
    const subject = subjects[index];
    document.getElementById('subject').value = subject.subject;
    document.getElementById('grade').value = subject.grade;
    document.getElementById('credit').value = subject.credit;
    editIndex = index;
}

function deleteSubject(index) {
    subjects.splice(index, 1);
    displaySubjects();
}

function calculateCGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(subject => {
        let points = 0;
        switch (subject.grade) {
            case 'S':
                points = 10;
                break;
            case 'A':
                points = 9;
                break;
            case 'B':
                points = 8;
                break;
            case 'C':
                points = 7;
                break;
            case 'D':
                points = 6;
                break;
            case 'F':
                points = 0;
                break;
        }
        totalPoints += points * subject.credit;
        totalCredits += parseInt(subject.credit);
    });

    const cgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('cgpa').textContent = cgpa;
}

function resetForm() {
    subjects = [];
    document.getElementById('subjectList').innerHTML = '';
    document.getElementById('cgpa').textContent = '0.00';
}