name_of_the_student=[];
function submit()
{
    var display_student_array = [];

    for (var j = 1; j <=1; j++)
    {
        var name_of_the_students = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_students);
        name_of_the_student.push(name_of_the_students);
    }

    console.log(name_of_the_student);

    var length_of_name_of_student_array = name_of_the_student.length;
    console.log(length_of_name_of_student_array);

    for (var k = 0; k< length_of_name_of_student_array; k++)
    {
        display_student_array.push("<h4>" +name_of_the_student[k] + "<h4>");
        console.log(display_student_array);
    }
    var remove_commas= display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    name_of_the_student.sort();
    console.log(name_of_the_student);

    var display_student_array_sorting= [];

    var length_of_name_of_student_array = name_of_the_student.length;
    console.log(length_of_name_of_student_array);

    for (var k = 0; k< length_of_name_of_student_array; k++)
    {
        display_student_array_sorting.push("<h4>" +name_of_the_student[k] + "<h4>");
        console.log(display_student_array_sorting);
    }

    console.log(display_student_array_sorting);

    var remove_commas= display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}