$( document ).ready(function() {
    var formErrors = [];
    $('#city').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            $(this).removeClass( "is-invalid");
        }
    });

    $('#name').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            $(this).removeClass( "is-invalid");
        }
    });

    $('#category').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            $(this).removeClass( "is-invalid");
        }
    });

    $('#start-at').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            $('#end-at').attr('min', $(this).val());
            $(this).removeClass( "is-invalid");
        }
    });

    $('#start-time').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            if ($('#start-at').val() == $('#end-at').val()){
                $('#end-time').attr('min', $(this).val());
            }
            $(this).removeClass( "is-invalid");
        }
    });
    $('#end-at').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            $(this).removeClass( "is-invalid");
        }
    });


    $('#end-time').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            $(this).removeClass( "is-invalid");
        }
    });

    $('#description').change(function(){
        if($(this).val() == ''){
            $(this).addClass( "is-invalid");
        }else{
            if ($('#start-at').val() == $('#end-at').val()){
                $('#end-time').attr('min', $('#start-time').val());
            }
            $(this).removeClass( "is-invalid");
        }
    });

    $('#send-event').on('click', function(e) {
        console.log('click');

        let name = $('#name').val();
        let city = $('#city').val();
        let category = $('#category').val();
        let start_at = $('#start-at').val();
        let start_time = $('#start-time').val();
        let end_at = $('#end-at').val();
        let end_time = $('#end-time').val();
        let description = $('#description').val();

        if(isValide(city, name, category, start_at, start_time, end_at, end_time, description)){
            console.log('ok');
        }else{
            e.preventDefault();
            let error = '';
            if(city == ''){
                error += formErrors['city'] + '<br/>';
                $('#city').addClass( "is-invalid");
            }

            if(name == ''){
                error += formErrors['name'] + '<br/>';
                $('#name').addClass( "is-invalid");
            }

            if(category == ''){
                error += formErrors['category'] + '<br/>';
                $('#category').addClass( "is-invalid");
            }

            if(start_at == ''){
                error += formErrors['start_at'] + '<br/>';
                $('#start-at').addClass( "is-invalid");
            }

            if(start_time == ''){
                error += formErrors['start_time'] + '<br/>';
                $('#start-time').addClass( "is-invalid");
            }

            if(end_at == ''){
                error += formErrors['end_at'] + '<br/>';
                $('#end-at').addClass( "is-invalid");
            }

            if(end_time == ''){
                error += formErrors['end_time'] + '<br/>';
                $('#end-time').addClass( "is-invalid");
            }


            if(Date.parse(start_at) > Date.parse(end_at)){
                error += formErrors['error_at'] + '<br/>';
                $('#end-at').addClass( "is-invalid");
            }

            if(Date.parse(start_at) === Date.parse(end_at)){
                console.log('okkk');
                if (start_time > end_time){
                    error += formErrors['error_time'] + '<br/>';
                    $('#end-time').addClass( "is-invalid");
                }
            }

            if(description == ''){
                error += formErrors['description'];
                $('#description').addClass( "is-invalid");
            }

            $('.message-error').html(error);
            $('.message-error').show();

        }
    });


    function isValide(city, name, category, start_at, start_time, end_at, end_time, description){
        formErrors['name'] = (name && name != '')? '' : 'Entrez le nom de l\'évenement ';
        formErrors['city'] = (city && city != '')? '' : 'Entrez la ville l\'évenement';
        formErrors['category'] = (category && category != '')? '' : 'Entrez La catégorie de l\'évenement';
        formErrors['start_at'] = (start_at && start_at != '')? '' : 'Définir une date de l\'évenement';
        formErrors['start_time'] = (start_time && start_time != '')? '' : 'Définir l\'heure du début de l\'évenement';
        formErrors['end_at'] = (end_at && end_at != '')? '' : 'Définir la date de la fin de l\'évenement';
        formErrors['end_time'] = (end_time && end_time != '')? '' : 'Définir l\'heure de la fin de l\'évenement';
        formErrors['description'] = (description && description != '')? '' : 'Entrez une description de l\'évenement';
        formErrors['error_at'] = (description && description != '')? '' : 'La date de fin ne doit pas être antérieur à la date de début';
        formErrors['error_time'] = (description && description != '')? '' : 'Entrer un créneaux horaire valide';
        if(formErrors['name'] == '' && formErrors['city'] == '' && formErrors['category'] == '' && formErrors['start_at'] == '' && formErrors['start_time'] == '' && formErrors['end_at'] == '' && formErrors['end_time'] == '' && formErrors['description'] == '' && formErrors['error_at'] == '' && formErrors['error_time'] == '' ){
            return true;
        }
        return false;

    }


});
