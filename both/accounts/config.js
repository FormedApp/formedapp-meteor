AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    sendVerificationEmail: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showResendVerificationEmailLink: true,
});

AccountsTemplates.addField({
    _id: 'firstName',
    displayName: "First Name",
    type: 'text',
    required: true
});