$(function () { 
    $('#getProduct').on('click', function () {
        $.ajax({
            url: "/publications",
            success: function (publications) {
                let tbody = $('tbody');
                tbody.html('');
                publications.forEach(element => {
                    tbody.append(`
                        <tr>
                            <td class="id">${element.id_publication}</td>
                            <td>
                                <input type="text" class="name" value="${element.title}" />
                            </td>
                            <td>
                                <button class="update-button">Update</button>
                                <button class="delete-button">Delete</button>
                            </td>
                        </tr>
                    `);
                });
            }
        });
    });

    $('#productForm').on('submit', function (e) {
        e.preventDefault();
        let newProduct = $('#newProduct');
        console.log(newProduct.val())
        $.ajax({
            type: "POST",
            url: "/publication",
            data: { productValue : newProduct.val() },
            success: function (response) {
                console.log(response);
            }
        });
    });
});