export function ResetAllFormCheckInput() {
  $(".form-check-input").prop("checked", false);
  $("#authorize").prop("checked", false);
  $("#done-btn").prop("disabled", true);
}
