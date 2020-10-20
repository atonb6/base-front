(function ($) {
  "use strict"; // Start of use strict

  //tooltip
  $('[data-toggle="tooltip"]').tooltip({
    container: "body",
  });

  //slider
  $(".slider").not(".slick-initialized").slick({
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  //Match Height
  $(".item").matchHeight();

  //Current
  $(".dashboard__menu__list__item").click(function () {
    $(".dashboard__menu__list__item").removeClass("current");
    $(this).addClass("current");
  });

  //Tags
  $(".close").click(function () {
    $(this).parent().remove();
  });

  //Datatables Init

  var table = $("DataTable").DataTable({
    language: {
      lengthMenu: "Mostrar _MENU_ registros por página",
      zeroRecords: "No existe nada - disculpa",
      info: "Mostrando página _PAGE_ de _PAGES_",
      infoEmpty: "No existen registros",
      infoFiltered: "(filtrado por _MAX_ del registro)",
      search: "Buscar",
      paginate: {
        next: "Siguiente",
        previous: "Anterior",
      },
      select: {
        rows: "%d filas seleccionadas",
      },
    },
    fixedColumns: {
      leftColumns: 2,
    },
    columnDefs: [{
      orderable: false,
      className: "select-checkbox",
      targets: 0,
    }, ],
    select: {
      style: "multi",
      selector: "td:first-child label",
      rows: {
        _: "Has seleccionado %d filas",
        0: "Haz clic en una fila para seleccionarla",
        1: "Sólo 1 fila seleccionada",
      },
    },
    order: [
      [1, "asc"]
    ],
  });

})(jQuery); // End of use strict