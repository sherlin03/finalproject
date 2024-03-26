if (validation() === true) {
    const formData = new FormData();

    formData.append('companyname', values.companyName);
    formData.append('gstn', values.gstinNo);
    formData.append('mobilenumber', values.ph_No);
    formData.append('pannumber', values.pannumber);
    formData.append('email', values.emailId);
    // formData.append('logo', values.logo);

    MasterService.saveAdminRegistration(formData)
      .then((res) => {
        const message = res.data.message;
        if (message.toString() === "Success") {
          setMessage("Admin Registered SuccessFully");
          setseverit("success");
          setOpen(true);
          getadmin()
        } else {
          setMessage('Already Registered the Admin');
          setseverit("error");
          setOpen(true);
        }
        Reset();
      })