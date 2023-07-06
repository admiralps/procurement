"use strict";
var KTCreateApp = function() {
    var e, t, o, r, i, a, n = [];
    return {
        init: function() {
            (t = document.querySelector("#kt_modal_create_app")) && (e = new bootstrap.Modal(t), (o = document.querySelector("#kt_modal_create_app_stepper")) && (r = document.querySelector("#kt_modal_create_app_form"), i = document.querySelector('[data-kt-stepper-action="submit"]'), (a = new KTStepper(o)).on("kt.stepper.next", (function(e) {
                console.log("stepper.next");
                var t = n[e.getCurrentStepIndex() - 1];
                t ? t.validate().then((function(t) {
                    console.log("validated!"), "Valid" == t ? (e.goNext(), KTUtil.scrollTop()) : Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-light"
                        }
                    }).then((function() {
                        KTUtil.scrollTop()
                    }))
                })) : (e.goNext(), KTUtil.scrollTop())
            })), a.on("kt.stepper.previous", (function(e) {
                console.log("stepper.previous"), e.goPrevious(), KTUtil.scrollTop()
            })), i.addEventListener("click", (function(t) {
                t.preventDefault(), i.disabled = !0, i.setAttribute("data-kt-indicator", "on"), setTimeout((function() {
                    i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({
                        text: "Form has been successfully submitted!",
                        icon: "success",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    }).then((function(t) {
                        t.isConfirmed && e.hide()
                    }))
                }), 2e3)
            })), n.push(FormValidation.formValidation(r, {
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: "App name is required"
                            }
                        }
                    },
                    category: {
                        validators: {
                            notEmpty: {
                                message: "Category is required"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            })), n.push(FormValidation.formValidation(r, {
                fields: {
                    framework: {
                        validators: {
                            notEmpty: {
                                message: "Framework is required"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            })), n.push(FormValidation.formValidation(r, {
                fields: {
                    dbname: {
                        validators: {
                            notEmpty: {
                                message: "Database name is required"
                            }
                        }
                    },
                    dbengine: {
                        validators: {
                            notEmpty: {
                                message: "Database engine is required"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            })), n.push(FormValidation.formValidation(r, {
                fields: {
                    card_name: {
                        validators: {
                            notEmpty: {
                                message: "Name on card is required"
                            }
                        }
                    },
                    card_number: {
                        validators: {
                            notEmpty: {
                                message: "Card member is required"
                            },
                            creditCard: {
                                message: "Card number is not valid"
                            }
                        }
                    },
                    card_expiry_month: {
                        validators: {
                            notEmpty: {
                                message: "Month is required"
                            }
                        }
                    },
                    card_expiry_year: {
                        validators: {
                            notEmpty: {
                                message: "Year is required"
                            }
                        }
                    },
                    card_cvv: {
                        validators: {
                            notEmpty: {
                                message: "CVV is required"
                            },
                            digits: {
                                message: "CVV must contain only digits"
                            },
                            stringLength: {
                                min: 3,
                                max: 4,
                                message: "CVV must contain 3 to 4 digits only"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }))))
        }
    }
}();
KTUtil.onDOMContentLoaded((function() {
    KTCreateApp.init()
}));