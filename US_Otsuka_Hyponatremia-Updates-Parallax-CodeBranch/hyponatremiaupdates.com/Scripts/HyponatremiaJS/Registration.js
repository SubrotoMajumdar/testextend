$(document).ready(function () {

    $.fn.removeAttrs = function (regex) {
        return this.each(function () {
            var $this = $(this),
                names = [];
            $.each(this.attributes, function (i, attr) {
                if (attr.specified && regex.test(attr.name)) {
                    $this.removeAttr(attr.name);
                }
            });
        });
    };


    var validate = $("#SignUp").validate({
        ignore: ":hidden:not(#SignUpOptions, #hiddendesignation)",
        rules: {
            SignUpOptions: {
                required: true,
            },
            hiddendesignation: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            Password: {
                required: true,
                minlength: 6
            },
            ConfirmPassword: {
                equalTo: "#Password",
                required: true,
            }
        },
        messages: {
            SignUpOptions: {
                required: "Please select a signup option."
            },
            hiddendesignation: {
                required: "Please select a designation."
            },
            email: {
                required: "Please enter Email.",
                email: "Your email address must be in the format of name@domain.com"
            },
            Password: {
                required: "Please enter password.",
                minlength: "Password must be atleast 6 characters."
            },
            ConfirmPassword: {
                required: "Please enter confirm password.",
                equalTo: "Passwords don't match."
            }
        }
    });

    $("#TreatmentQuestion").val("135 mEq/L");

    $("#divNPI").css('display', 'none');

    $("#SignUpOptions").val();

    var UserMarkedForEmailUpdate = false;

    $("#divspecialty").css('display', 'none');

    $("#divOtherSpeciality").css('display', 'none');

    $("#divstep2").css('display', 'none');

    $("#divstep3").css('display', 'none');

    $("#divSegmentationQuestion").css('display', 'none');

    $("#divSegmentationQuestion").css('display', 'none');

    var Designation = {
        "professionalDesignationOptions": [{ "DesignationID": "1", "DesignationName": "MD" },
                { "DesignationID": "2", "DesignationName": "DO" },
                { "DesignationID": "3", "DesignationName": "PA" },
                 { "DesignationID": "4", "DesignationName": "NP" },
                 { "DesignationID": "5", "DesignationName": "RN" },
        { "DesignationID": "6", "DesignationName": "Pharmacist" }]
    }

    var listItems = "";
    for (var i = 0; i < Designation.professionalDesignationOptions.length; i++) {
        listItems += "<option value='" + Designation.professionalDesignationOptions[i].DesignationName + "'>" + Designation.professionalDesignationOptions[i].DesignationName + "</option>";
    }
    $("#professionalDesignation").html(listItems);

    var DefaultOption = "<option value='" + "0" + "'>- Select One -</option>";
    $("#professionalDesignation").prepend(DefaultOption);


    var Speciality = {
        "SpecialityOptions": [{ "SpecialityID": "1", "SpecialityName": "Cardiologist" },
                { "SpecialityID": "2", "SpecialityName": "Nephrologist" },
                { "SpecialityID": "3", "SpecialityName": "Hospitalist/Intensivist" },
                 { "SpecialityID": "4", "SpecialityName": "Emergency medicine" },
                 { "SpecialityID": "5", "SpecialityName": "Endocrinologist" },
        { "SpecialityID": "6", "SpecialityName": "Oncologist" }]
    }

    var listItems = "";
    for (var i = 0; i < Speciality.SpecialityOptions.length; i++) {
        listItems += "<option value='" + Speciality.SpecialityOptions[i].SpecialityName + "'>" + Speciality.SpecialityOptions[i].SpecialityName + "</option>";
    }
    $("#specialty").html(listItems);

    var DefaultOption = "<option value='" + "7" + "'>Other</option>";
    $("#specialty").append(DefaultOption);


    var State = {
        "StateOptions": [{ "StateID": "1", "StateName": "AL" },
                { "StateID": "2", "StateName": "AK" },
                { "StateID": "3", "StateName": "AZ" },
                 { "StateID": "4", "StateName": "AR" },
         { "StateID": "5", "StateName": "CA" },
         { "StateID": "6", "StateName": "CO" },
         { "StateID": "7", "StateName": "CT" },
         { "StateID": "8", "StateName": "DE" },
         { "StateID": "9", "StateName": "FL" },
         { "StateID": "10", "StateName": "GA" },
         { "StateID": "11", "StateName": "HI" },
         { "StateID": "12", "StateName": "ID" },
         { "StateID": "13", "StateName": "IL" },
         { "StateID": "14", "StateName": "IN" },
         { "StateID": "15", "StateName": "IA" },
         { "StateID": "16", "StateName": "KS" },
        { "StateID": "17", "StateName": "KY" },
        { "StateID": "18", "StateName": "LA" },
    { "StateID": "19", "StateName": "ME" },
    { "StateID": "20", "StateName": "MD" },
    { "StateID": "21", "StateName": "MA" },
    { "StateID": "22", "StateName": "MI" },
    { "StateID": "23", "StateName": "MN" },
        { "StateID": "24", "StateName": "MS" },
        { "StateID": "25", "StateName": "MO" },
        { "StateID": "26", "StateName": "MT" },
        { "StateID": "27", "StateName": "NE" },
        { "StateID": "28", "StateName": "NV" },
        { "StateID": "29", "StateName": "NH" },
        { "StateID": "30", "StateName": "NJ" },
        { "StateID": "31", "StateName": "NM" },
        { "StateID": "32", "StateName": "NY" },
        { "StateID": "33", "StateName": "NC" },
        { "StateID": "34", "StateName": "ND" },
        { "StateID": "35", "StateName": "OH" },
        { "StateID": "36", "StateName": "OK" },
        { "StateID": "37", "StateName": "OR" },
        { "StateID": "38", "StateName": "PA" },
        { "StateID": "39", "StateName": "RI" },
        { "StateID": "40", "StateName": "MN" },
         { "StateID": "41", "StateName": "SC" },
         { "StateID": "42", "StateName": "SD" },
         { "StateID": "43", "StateName": "TN" },
         { "StateID": "44", "StateName": "TX" },
         { "StateID": "45", "StateName": "UT" },
         { "StateID": "46", "StateName": "MN" },
         { "StateID": "47", "StateName": "VT" },
         { "StateID": "48", "StateName": "VA" },
        { "StateID": "49", "StateName": "WA" },
        { "StateID": "50", "StateName": "WV" },
        { "StateID": "51", "StateName": "WI" },
        { "StateID": "52", "StateName": "WY" }]
    }


    var listItems = "";
    for (var i = 0; i < State.StateOptions.length; i++) {
        listItems += "<option value='" + State.StateOptions[i].StateName + "'>" + State.StateOptions[i].StateName + "</option>";
    }
    $("#stateOfLicensure").html(listItems);
    $("#businessAddressState").html(listItems);

});


function OnDesignationChange(e) {

    if (e.value == "0") {
        $("#hiddendesignation").val('');
    }
    else {
        $("#hiddendesignation").val(e.value);
    }

    if (e.value != "0") {
        $("#divspecialty").css('display', 'block');
    }
    else {
        $("#divspecialty").css('display', 'none');
        $("#divOtherSpeciality").css('display', 'none');
    }

}

function OnSpecialityChange(e) {

    if (e.value == "7") {
        $("#divOtherSpeciality").css('display', 'block');
    }
    else {
        $("#divOtherSpeciality").css('display', 'none');
    }

}

function BothContentMailClick() {
    $("#SignUpOptions").val(1);
    UserMarkedForEmailUpdate = true;
    $("#divstep2").css('display', 'block');
    $("#divstep3").css('display', 'block');
    $("#divSegmentationQuestion").css('display', 'block');
    $("#divPassword").css('display', 'block');
    $("#divConfirmPassword").css('display', 'block');
    $("#divSegmentationQuestion").css('display', 'block');
    $("#divHCPVerification").css('display', 'block');
}

function ExclusiveContentClick() {
    $("#SignUpOptions").val(2);
    UserMarkedForEmailUpdate = false;
    $("#divstep2").css('display', 'block');
    $("#divstep3").css('display', 'block');
    $("#divSegmentationQuestion").css('display', 'none');
    $("#divPassword").css('display', 'block');
    $("#divConfirmPassword").css('display', 'block');
    $("#divSegmentationQuestion").css('display', 'none');
    $("#divHCPVerification").css('display', 'block');
}
function EmailUpdatesClick() {
    $("#SignUpOptions").val(3);
    UserMarkedForEmailUpdate = true;
    $("#divstep2").css('display', 'block');
    $("#divstep3").css('display', 'block');
    $("#divSegmentationQuestion").css('display', 'block');
    $("#divPassword").css('display', 'none');
    $("#divConfirmPassword").css('display', 'none');
    $("#divSegmentationQuestion").css('display', 'block');
    $("#divHCPVerification").css('display', 'none');
}
$("#license").click(function () {
    $("#HCPOptions").val("State License Number");
    $("#divStateLicensure").css('display', 'block');
    $("#divNPI").css('display', 'none');
});

$("#npi").click(function () {
    $("#HCPOptions").val("NPI Number");
    $("#divStateLicensure").css('display', 'none');
    $("#divNPI").css('display', 'block');
});

$("#levelOfSerum135").click(function () {
    $("#TreatmentQuestion").val("135 mEq/L");
});

$("#levelOfSerum132").click(function () {
    $("#TreatmentQuestion").val("132 mEq/L");
});

$("#levelOfSerum128").click(function () {
    $("#TreatmentQuestion").val("128 mEq/L");
});

$("#levelOfSerum125").click(function () {
    $("#TreatmentQuestion").val("125 mEq/L");
});



function ValidateForm() {
    //$('#Password').removeAttrs(/^data-/);
    $('#Password').removeAttr('data-val');
    $('#Password').removeAttr('data-val-required');
    $('#Password').removeAttr('data-val-length');
    $('#Password').removeAttr('data-val-length-min');
    $('#Password').removeAttr('aria-required');
    
    $("#SignUp").submit();
}