$(document).ready(function () {
    $(".loader").show();
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://dummy.restapiexample.com/api/v1/employees',
        success: function (response, textStatus, jqXHR) {
            // console.log(response);
            $(".loader").hide();
            GetData(response);
            getDataSecond(response);
            getDataThird(response);
            getDataFourth(response);
            getDataFifth(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus, errorThrown);
        }
    });

})


function GetData(datas) {
    var dataFilter = datas.filter(function (item) {
        var sortA = item.employee_name.charAt(0).toLowerCase() == ["a"];
        var sortB = item.employee_name.charAt(0).toLowerCase() == ["b"];
        var sortC = item.employee_name.charAt(0).toLowerCase() == ["c"];
        var sortD = item.employee_name.charAt(0).toLowerCase() == ["d"];
        var sortE = item.employee_name.charAt(0).toLowerCase() == ["E"];
        return (sortA + sortB + sortC + sortD + sortE);
    });
    var data = dataFilter.sort(function (a, b) {
        return compareStrings(a.employee_name, b.employee_name);
    })
    console.log(data);
    loadMoreData(data, "boxData")

}
function loadMoreData(data, Id) {
    var len = 4;
    dataAlpha(data, Id, len)
    $("#loadData").on('click', function () {
        var len = data.length;
        dataAlpha(data, Id, len)
    })
}

function dataAlpha(data, Id, len) {
    console.log(data);
    var html = '';
    for (var i = 0; i < len; i++) {
        html += '<div class="grid-box"><img alt="" src="images/1.jpg">';
        html += '<p> <span>Name:</span>' + data[i].employee_name + '</p>';
        html += '<p> <span>Salary:</span>' + data[i].employee_salary + '</p>';
        html += '<p> <span>Id:</span>' + data[i].id + '</p>';
        html += '</div>';
    }
    $("#" + Id).html(html);
}

//F-K
function getDataSecond(datas) {
    var dataFilter = datas.filter(function (item) {
        var sortA = item.employee_name.charAt(0).toLowerCase() == ["f"];
        var sortB = item.employee_name.charAt(0).toLowerCase() == ["i"];
        var sortC = item.employee_name.charAt(0).toLowerCase() == ["j"];
        var sortD = item.employee_name.charAt(0).toLowerCase() == ["k"];
        return (sortA + sortB + sortC + sortD);
    });
    var data = dataFilter.sort(function (a, b) {
        return compareStrings(a.employee_name, b.employee_name);
    });

    loadMoreDataK(data, "boxData2")

}
function loadMoreDataK(data, Id) {
    var len = 4;
    dataAlpha(data, Id, len)
    $("#loadData2").on('click', function () {
        var len = data.length;
        dataAlpha(data, Id, len)
    })
}

//L-P
function getDataThird(datas) {
    var dataFilter = datas.filter(function (item) {
        var sortA = item.employee_name.charAt(0).toLowerCase() == ["l"];
        var sortB = item.employee_name.charAt(0).toLowerCase() == ["m"];
        var sortC = item.employee_name.charAt(0).toLowerCase() == ["n"];
        var sortD = item.employee_name.charAt(0).toLowerCase() == ["o"];
        var sortP = item.employee_name.charAt(0).toLowerCase() == ["p"];
        return (sortA + sortB + sortC + sortD + sortP);
    });
    var data = dataFilter.sort(function (a, b) {
        return compareStrings(a.employee_name, b.employee_name);
    });

    loadMoreDataL(data, "boxData3")

}
function loadMoreDataL(data, Id) {
    var len = 4;
    dataAlpha(data, Id, len)
    $("#loadData3").on('click', function () {
        var len = data.length;
        dataAlpha(data, Id, len)
    })
}

//Q-U
function getDataFourth(datas) {
    var dataFilter = datas.filter(function (item) {
        var sortA = item.employee_name.charAt(0).toLowerCase() == ["q"];
        var sortB = item.employee_name.charAt(0).toLowerCase() == ["r"];
        var sortC = item.employee_name.charAt(0).toLowerCase() == ["s"];
        var sortD = item.employee_name.charAt(0).toLowerCase() == ["t"];
        var sortP = item.employee_name.charAt(0).toLowerCase() == ["u"];
        return (sortA + sortB + sortC + sortD + sortP);
    });
    var data = dataFilter.sort(function (a, b) {
        return compareStrings(a.employee_name, b.employee_name);
    });

    loadMoreDataQ(data, "boxData4")

}
function loadMoreDataQ(data, Id) {
    var len = 4;
    dataAlpha(data, Id, len)
    $("#loadData4").on('click', function () {
        var len = data.length;
        dataAlpha(data, Id, len)
    })
}


//V-Z
function getDataFifth(datas) {
    var dataFilter = datas.filter(function (item) {
        var sortA = item.employee_name.charAt(0).toLowerCase() == ["v"];
        var sortB = item.employee_name.charAt(0).toLowerCase() == ["w"];
        var sortC = item.employee_name.charAt(0).toLowerCase() == ["x"];
        var sortD = item.employee_name.charAt(0).toLowerCase() == ["y"];
        var sortP = item.employee_name.charAt(0).toLowerCase() == ["z"];
        return (sortA + sortB + sortC + sortD + sortP);
    });
    var data = dataFilter.sort(function (a, b) {
        return compareStrings(a.employee_name, b.employee_name);
    });

    loadMoreDataQ(data, "boxData5")

}
function loadMoreDataQ(data, Id) {
    var len = 4;
    dataAlpha(data, Id, len)
    $("#loadData5").on('click', function () {
        var len = data.length;
        dataAlpha(data, Id, len)
    })
}

function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}