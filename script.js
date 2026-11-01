
const students = [];

let nextStudentId = 1;

function addStudent() {
    let name = prompt("öğrencinin adı ve soyadını giriniz:");

    if (name === "") {
        alert("Öğrenci adı boş kalmamalı");
        return;
    }
    const student = {
        id: nextStudentId,
        name: name
    };

    students.push(student);
    nextStudentId++;

    alert(`${name} isimli öğrenci başarıyla eklendi.`);
}

function listStudents() {

    if (students.length === 0) {
        alert("öğrenci listesi boş");
        return;
    }

    let studentList = "KAYITLI ÖĞRENCİLER\n\n";

    students.forEach(function(student) {
        studentList += `ID: ${student.id} - Ad Soyad: ${student.name}\n`;
    });

    alert(studentList);
}

function deleteStudent() {

    if (students.length === 0) {
        alert("silinecek öğrenc bulunamadı.");
        return;
    }

    let studentId = prompt("Silmek istediğiniz öğrencinin ID numarasını giriniz");

    if (studentId === null) {
        alert("Silme işlemi iptal edildi.");
        return;
    }

    if (studentId === "" || !/^\d+$/.test(studentId)) {
        alert("Lütfen geçerli bir ID giriniz!");
        return;
    }

    studentId = Number(studentId);


    const isConfirmed = confirm(
        `${students[studentIndex].name} isimli öğrenciyi silmek istediğinize emin misiniz?`
    );

    if (!isConfirmed) {
        alert("Silme işlemi iptal edildi.");
        return;
    }

    students.splice(studentIndex, 1);

    alert("Öğrenci başarıyla silindi.");
}


function showMenu() {

    return prompt(
        "1 - Öğrenci Ekle\n" +
        "2 - Öğrencileri Listele\n" +
        "3 - Öğrenci Sil\n" +
        "4 - Uygulamadan Çık\n" 
    );
}

function startApp() {

    let isRunning = true;

    while (isRunning) {

        const choice = showMenu();

        switch (choice) {

            case "1":
                addStudent();
                break;

            case "2":
                listStudents();
                break;

            case "3":
                deleteStudent();
                break;

            case "4":

                if (confirm("Uygulamadan çıkmak istediğinize emin misiniz?")) {
                    alert("Uygulamadan çıkış yapılıyor. İyi günler!");
                    isRunning = false;
                }

                break;

            case null:
                if (confirm("Uygulamayı kapatmak istiyor musunuz?")) {
                    isRunning = false;
                }
                break;

            default:
                alert("Hatalı seçim yaptınız! Lütfen 1-4 arasında bir değer giriniz.");
                break;
        }
    }
}

startApp();
