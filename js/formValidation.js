function validateForm()
{
	valid = true;
	
	// initiate array to read field values after user hits submit
	msg = "Incomplete Form:\n";
	formfields = new Array();
	formfields[0] = document.forms["testForm"]["address1"].value;
	formfields[1] = document.forms["testForm"]["city"].value;
	formfields[2] = document.forms["testForm"]["state"].value;
	formfields[3] = document.forms["testForm"]["zip"].value;
	formfields[4] = document.forms["testForm"]["phone"].value;
	formfields[5] = document.forms["testForm"]["email"].value;
	
	// validate Address line 1 field
	if (formfields[0] == "" || formfields[0] == null )
	{
		msg+="First address field has not been filled.\n";
		valid = false;
	}
	
	// validate City field
	if (formfields[1] == "" || formfields[1] == null )
	{
		msg+="City field has not been filled.\n";
		valid = false;
	}
	
	// validate State field
	if (formfields[2] == "default" || formfields[2] == null )
	{
		msg+="State field has not been selected.\n";
		valid = false;
	}
	
	// validate Zip Code field
	if (formfields[3] == "" || formfields[3] == null )
	{
		msg+="Zip Code has not been entered.\n";
		valid = false;
	}
		else
	{
	
		// string of valid characters for zip code
		var digits = "0123456789";
		
		// validate that there are 5 characters 
		
		if (formfields[3].length != 5)
		{
			msg+="Please enter a valid 5 digit zip code.\n";
			valid = false;
		}
		else
		{
			// validate that each character is a number
			
			var numValid = false;
			
			// checking each character user input
			for (var i=0;i<5;++i)
			{
				numValid = false;
				
				// check user input against valid string digits
				for (var j=0;j<digits.length;++j)
				{
					if (formfields[3][i] == digits[j])
					{
						numValid = true;
						break;
					}
				}
				if (!numValid)
				{
					msg+="Please enter a valid 5 digit zip code.\n";
					valid = false;
					break;
				}
			}
		}
	}
	
	// validate Phone number field
	if (formfields[4] == "" || formfields[4] == null )
	{
		msg+="Phone number has not been filled.\n";
		valid = false;
	}
	
	// validate 10 digits in Phone number
	
	else
	{
		// string of valid characters
		var digits = "0123456789"
		var numPhoneDigits = 0;
		var i = 0;
		
		// checks how many digits are inside
		while (i < formfields[4].length)
		{
			// checks each character input against valid string
			for (var j = 0;j<digits.length;++j)
			{
				if (formfields[4][i]==digits[j])
				{
					numPhoneDigits++;
					break;
				}
			}
			++i;
		}
		
		// checks that there are 10 characters that are numbers
		
		if (numPhoneDigits < 10)
		{
			msg+="Please enter a minimum of 10 digits for your phone number.\n"
			valid = false;
		}
	}
	
	// validate E-mail field is filled
	
	if (formfields[5] == "" || formfields[5] == null )
	{
		msg+="E-mail field has not been filled.\n";
		valid = false;
	}
	else
	{
		// checks position of @ and . characters in email
		var atpos = formfields[5].indexOf("@");
		var dotpos = formfields[5].lastIndexOf(".");
		
		// runs a check against valid email input by stating the minimum letter input required
		
		if (atpos < 1 || dotpos < atpos+2 || dotpos + 2>=formfields[5].length)
		{
			msg+="Please enter a valid e-mail.\n";
			valid = false;
		}
	}
	
	// returns field input errors with error message to userss
	if (!valid) alert(msg);
	return valid;
};