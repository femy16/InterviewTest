//************************************ converting csv file to Table*****************************************
$(document).ready(function() {
    $('.btn').click(DeleteRow);
    $('#load_data').click(function() {
        $.ajax({
            url: "data/rates_lookup.csv",
            dataType: "text",
            success: function(data) {
                var employee_data = data.split(/\r?\n|\r/);
                var table_data = '<table class="table table-bordered table-striped">';
                for (var count = 0; count < employee_data.length; count++) {
                    var cell_data = employee_data[count].split(",");
                    table_data += '<tr>';
                    for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                        if (count === 0) {
                            table_data += '<th>' + cell_data[cell_count] + '</th>';
                        }
                        else {
                            table_data += '<td>' + cell_data[cell_count] + '</td>';
                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $('#prod_table').html(table_data);
            }
        });
    });
    
     

});


//**************************************************Displaying Tables*********************************************
function show_products() {
    $('#sales_details').hide();
    $('.home_para').hide();
    $('.home_img').hide();
    $('#product_details').show();
}

function reload() {
    location.reload();
}

function show_sales() {
    $('.home_para').hide();
    $('.home_img').hide();
    $('#product_details').hide();
    $('#sales_details').show();
    $('.btn').click(DeleteRow);

}
//*******************************getting data from json and CSV files and converting to table******************************

$.getJSON("data/itemlist.json", function(data) {
    d3.csv("data/rates_lookup.csv", function(consdata) {


        var Items = [];
        var TotalCostPrice;
        var TotalSellPrice;


        $.each(data, function(key, val) {


            Items.push("<tr>");
            Items.push("<td id=''" + key + "''>" + val.code + "</td>");
            Items.push("<td id=''" + key + "''>" + val.description + "</td>");
            Items.push("<td  class='qty' onclick='qty_change(this.innerText)' contenteditable='true' id=''" + key + "'' >" + val.quantity + "</td>");
            var filteredData = consdata.filter(function(d) {
                if (d["Product Code"] == val.code) {
                    var Unit = parseInt(d["Unit"]);

                    var UnitCostPrice = parseFloat(d["Unit Cost Price"]);

                    var UnitSellPrice = parseFloat(d["Unit Sell Price"]);

                    TotalCostPrice = (Unit) * (UnitCostPrice) * parseInt(val.quantity);

                    TotalSellPrice = (Unit) * (UnitSellPrice) * parseInt(val.quantity);


                    // $('.cost').text(TotalCostPrice);


                    // $('.sell').text(TotalSellPrice);

                    Items.push("<td class='cost' id=''" + key + "''>" + TotalCostPrice.toFixed(2) + "</td>");
                    Items.push("<td class='sell' id=''" + key + "''>" + TotalSellPrice.toFixed(2) + "</td>");
                }
            });

            // Items.push("<td><button class='btn' type='button' id=''" + key + "'>"+ "Remove"+"</button></td>");
            Items.push("<td><input type='checkbox' name='record' id=''" + key + "'></td>");

            Items.push("</tr>");


        });
        $("<tbody/>", { html: Items.join("") }).appendTo("#sales_table");
    });

});

//***************************************Deleting Row******************************************************

function DeleteRow() {
    $("#sales_table").find('input[name="record"]').each(function() {
        if ($(this).is(":checked")) {
            $(this).parents("tr").remove();
        }
    });

}

//****************************************Adding New Row***************************************************

var tbody = $('#sales_table').children('tbody');


var table = tbody.length ? tbody : $('#sales_table');

function selected_product(selValue) {
    if (selValue == "") {
        $("#description").val("");
    }
    if (selValue == "1") {
        $("#description").val("Banana");
    }
    if (selValue == "2") {
        $("#description").val("Pear");
    }
    if (selValue == "3") {
        $("#description").val("Mixed Fruit Drops");
    }
    if (selValue == "4") {
        $("#description").val("Mug");
    }
    if (selValue == "5") {
        $("#description").val("Wooden Box");
    }
    if (selValue == "6") {
        $("#description").val("Apple");
    }
    if (selValue == "7") {
        $("#description").val("Pack of Tissues");
    }
}
$(".add-row").click(function() {
    var product_code = $("#product_code").val();
    var description = $("#description").val();
    var quantity = $("#quantity").val();
    var total_cost_price = $("#total_cost_price").val();
    var total_sell_price = $("#total_sell_price").val();


    var new_row = "<tr><td contenteditable='true'>" + product_code + "</td><td contenteditable='true'>" + description + "</td><td contenteditable='true'>" + quantity + "</td><td contenteditable='true'>" + total_cost_price + "</td><td contenteditable='true'>" + total_sell_price + "</td><td><input type='checkbox' name='record'></td></tr>"
    table.append(new_row);
    $("#product_code").val("");
    $("#description").val("");
    $("#quantity").val("");
    $("#total_cost_price").val("");
    $("#total_sell_price").val("");
});
//****************************************************quantity Change


