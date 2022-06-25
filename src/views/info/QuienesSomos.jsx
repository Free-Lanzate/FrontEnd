import React from 'react'

const QuienesSomos = () => {
  return (
    <div>
        <div className="page_title">
        
        <h1>¿Quienes somos?</h1>
    </div>
    <div className="submenu">
        
        <h4><a href="#Empresa">Información General de la Empresa</a></h4> 
        <h4><a href="#Preguntas">Preguntas Frecuentes</a></h4> 
    </div>

    <h2 id="Empresa" class="content_subtitle">Información General de la Empresa</h2> 
    <div>
        <h3>Conoce Free-Lánzate</h3> 
        <p>
            Free-Lánzate es una aplicación web diseñada por estudiantes de Ingeniería de Sistemas de la Univerisidad Nacional de Colombia con el
            fin de ofrecerle la oportunidad a los diferentes emprendedores de aumentar sus ingresos desde cualquier parte del mundo mediante
            una aplicación web que ofrezca una experiencia única, fácil y amigable con los diferentes usuarios, la cual, cuenta con una gran
            variedad de productos, a muy buenos precios y que mediante un canal de pago seguro para ambas partes, le permita a los clientes
            adquirir productos o servicios de su necesidad y a los vendedores expandir sus negocios.
            <br/>
            <br/>
            Free-Lánzate está enfocado en aquellos emprendedores independientes, <i>freelancers</i>, autónomos o libres que deseen vender
            sus productos a un público más amplio o simplemente dar a conocer su catálogo de servicios. Al mismo tiempo,
            el proyecto está dirigido a aquellas personas amantes de las compras online, que prefieran adquirir productos o
            contratar servicios sin salir de casa y que cuenten con una tarjeta de débito o crédito que les permita realizar compras en línea.
            <br/>
            <br/>
            Al ser una aplicación web dedicada al público en general y de todas las edades, Free-Lánzate contará contará con una interfaz
            fácil de usar y amigable con el usuario, la cual, a partir de un proceso de autenticación le permita a los diferentes usuarios
            acceder desde sus respectivos roles y disfrutar de las diversas posibilidades de uso que la app ofrece, es así como los vendedores
            podrán ingresar los diversos productos o servicios que deseen ofrecer en el mercado mientras que a los compradores se les mostrará
            todo un catálogo de opciones acorde con sus necesidades.
        </p>
        <hr/>
    </div>

    <h2 id="Preguntas" class="content_subtitle">Preguntas Frecuentes</h2> 
    <div>
        <h3>¿Qué es la página de productos?</h3> 
        <p>
            Es una página en la que centralizamos todas las publicaciones de productos o servicios que son ofertados en nuestra página web.
            <br/>
            <br/>
            Los compradores podrán elegir los productos o servicios que necesiten.
            Así como cambien filtrar por lo que necesiten y no encuentren, ya que la página cuenta con una sección de busquedas en donde se podrá buscar por
            productos, servicios, vendedores o Freelancers.
            <br/>
            <br/>

            Además, desde la Página de producto se podrá acceder a las opciones de compra, dado que el producto podrá ser agregado a un Carrito personal de compras
            para posteriormente ser redigirido a la página de pagos en línea.
        </p>
        <hr/>
        <h3>¿Cómo vender de manera segura?</h3> 
        <p>
            Free-Lánzate es una página comprometida al 100% con la seguridad tanto de sus vendedores como de sus compradores, es por eso que a la hora de realizar
            una venta, esta únicamente podrá hacerse a usuarios registrados, de los cuales se cuenta con la información necesaria que brinde seguridad y
            confianza al vendedor.
            <br/>
            <br/>
            Adicionalmente, los pagos de los respectivos productos o servicios podrán realizarse mediante la plataforma de pagos en línea de la app, por lo que
            se brinda aún mayor confianza y seguridad para ambas partes involucradas.
        </p>
        <hr/>
        <h3>Costos de vender un producto</h3> 
        <p>
            Vender algun producto o servicio en Free-Lánzate es completamente gratuito. Sin embargo, si deseas aumentar tu alcance y tener mayor visibilidad hacía los
            compradores, deberás pagar un tarifa premium de publicación que te permita aumentar la duración, alcance y disponibilidad en línea de tus productos ofertados.
            confianza al vendedor.

        </p>
        <hr/>
        <h3>¿Cómo funciona la reputación del vendedor?</h3> 
        <p>
            La reputación es la forma en que te medimos teniendo en cuenta la calidad de la atención que ofreces.
            Es dinámica y la calculamos a medida que recibes ventas.
            <br/>
            <br/>
            Si tu atención es buena, también medimos el volumen de tus ventas, todo esto, a partir de la satisfacción de muestren tus clientes luego de haber
            adquirido algun producto contigo, así tendrás mayor visibilidad y generarás mayor confianza a la hora de realizar un próxima venta.
        </p>
        <hr/>
    </div>


    

    <div className="footer">
        <h5 class="footer_element">Free-Lánzate</h5>
        <h6 class="footer_element">Síguenos en nuestras redes: </h6>
        <img src="insta.png"/>
        <br/>
        <a href="mailto:freelanzate@gmail.com"><img src="gmail.png"/></a>
    </div>
    </div>
  )
}

export default QuienesSomos