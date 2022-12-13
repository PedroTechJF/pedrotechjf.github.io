<!doctype html>
<html lang="pt-br">
<html>

<head>
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta http-equiv="X-UA-Compatibility" content="IE=Edge">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="application-name" content="Pedro Tech">
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="favicon.png">
    <title>Início</title>
    <link rel="stylesheet" href="style.css">
    <script>
        function disableSubmit() {
            document.getElementById("submit").disabled = true;
        }

        function activateButton(element) {

            if (element.checked) {
                document.getElementById("submit").disabled = false;
            } else {
                document.getElementById("submit").disabled = true;
            }
        }
    </script>
    <script src="main.js"></script>
    <style type="text/css">
        html,
        body {
            height: 100%;
            margin: 0;
            background: white;
        }

        #terms {
            position: relative;
            background: white;
            display: table;
            margin: 25px;
        }

        #submit, #del{
            background-color: black;
            border-radius: 20px;
            font-family: Inter;
            color: white;
            border-color: black;
            margin-left: 5px;
            margin-top: 10px;
            width: 80px;
        }

        ul {
            font-family: Inter;
        }
        li {
            font-family: Inter;
        }

        h1 {
            text-shadow: none;
            text-align: left;
            margin: 0;

        }

        h2 {
            text-shadow: none;
            text-align: left;
            color: black;

        }

        h3 {
            text-shadow: none;
            color: black;
            text-align: left;
            top: 0px;
            box-shadow: none;
            background-color: rgba(0 0 0 / 0%);
            font-family: Inter;

        }

        p {
            font-family: Inter;

        }
        :root {
            --hamburgerColor: black;
        }
        @media screen and (max-width: 800px){
            #submit {
                font-size: 2vh;
            }
        }
    </style>
</head>

<body onload="disableSubmit(); verify()">
    <nav>
        <div id="menuToggle" style="position: fixed!important;">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        
        <ul id="menu">
            <a href="inicio.php">
                <li>Início</li>
            </a>
            <a href="depoimentos.php">
                <li>Depoimentos</li>
            </a>
            <a href="contato.php">
                <li>Contato</li>
            </a>
        </ul>
        </div>
    </nav>
    <script>
        let height = window.innerHeight;
        document.getElementById("menu").style.height = height + "px";
    </script>
    <div id="terms">
        <h1 id="termos">Termos de Uso</h1>

        <h2 ><span >1. Termos</span></h2>
        <p><span >Ao acessar ao site <a href="https://www.pedrotech.gq">Pedro Tech</a>, concorda em cumprir estes termos de servi&ccedil;o, todas as leis e regulamentos aplic&aacute;veis ​​e concorda que &eacute; respons&aacute;vel pelo cumprimento de todas as leis locais aplic&aacute;veis. Se voc&ecirc; n&atilde;o concordar com algum desses termos, est&aacute; proibido de usar ou acessar este site. Os materiais contidos neste site s&atilde;o protegidos pelas leis de direitos autorais e marcas comerciais aplic&aacute;veis.</span></p>
        <h2 ><span >2. Uso de Licen&ccedil;a</span></h2>
        <p><span >&Eacute; concedida permiss&atilde;o para baixar temporariamente uma c&oacute;pia dos materiais (informa&ccedil;&otilde;es ou software) no site Pedro Tech , apenas para visualiza&ccedil;&atilde;o transit&oacute;ria pessoal e n&atilde;o comercial. Esta &eacute; a concess&atilde;o de uma licen&ccedil;a, n&atilde;o uma transfer&ecirc;ncia de t&iacute;tulo e, sob esta licen&ccedil;a, voc&ecirc; n&atilde;o pode:&nbsp;</span></p>
        <ul>
            <li><span>A) Modificar ou copiar os materiais;&nbsp;</span></li>
            <li><span>B) Usar os materiais para qualquer finalidade comercial ou para exibi&ccedil;&atilde;o p&uacute;blica (comercial ou n&atilde;o comercial);&nbsp;</span></li>
            <li><span>C) Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Pedro Tech;&nbsp;</span></li>
            <li><span>D) Remover quaisquer direitos autorais ou outras nota&ccedil;&otilde;es de propriedade dos materiais; ou&nbsp;</span></li>
            <li><span>E) Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</span></li>
        </ul>
        <p><span>Esta licen&ccedil;a ser&aacute; automaticamente rescindida se voc&ecirc; violar alguma dessas restri&ccedil;&otilde;es e poder&aacute; ser rescindida por Pedro Tech a qualquer momento. Ao encerrar a visualiza&ccedil;&atilde;o desses materiais ou ap&oacute;s o t&eacute;rmino desta licen&ccedil;a, voc&ecirc; deve apagar todos os materiais baixados em sua posse, seja em formato eletr&oacute;nico ou impresso.</span></p>
        <h2 ><span>3. Isen&ccedil;&atilde;o de responsabilidade</span></h2>
        <ul>
            <li><span>O Pedro Tech n&atilde;o garante ou faz qualquer representa&ccedil;&atilde;o relativa &agrave; precis&atilde;o, aos resultados prov&aacute;veis ​​ou &agrave; confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</span></li>
        </ul>
        <h2 ><span >4. Limita&ccedil;&otilde;es</span></h2>
        <p><span >Em nenhum caso o Pedro Tech ou seus fornecedores ser&atilde;o respons&aacute;veis ​​por quaisquer danos (incluindo, sem limita&ccedil;&atilde;o, danos por perda de dados ou lucro ou devido a interrup&ccedil;&atilde;o dos neg&oacute;cios) decorrentes do uso ou da incapacidade de usar os materiais em Pedro Tech, mesmo que Pedro Tech ou um representante autorizado da Pedro Tech tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdi&ccedil;&otilde;es n&atilde;o permitem limita&ccedil;&otilde;es em garantias impl&iacute;citas, ou limita&ccedil;&otilde;es de responsabilidade por danos conseq&uuml;entes ou incidentais, essas limita&ccedil;&otilde;es podem n&atilde;o se aplicar a voc&ecirc;.</span></p>
        <h2 ><span >5. Precis&atilde;o dos materiais</span></h2>
        <p><span >Os materiais exibidos no site da Pedro Tech podem incluir erros t&eacute;cnicos, tipogr&aacute;ficos ou fotogr&aacute;ficos. Pedro Tech n&atilde;o garante que qualquer material em seu site seja preciso, completo ou atual. Pedro Tech pode fazer altera&ccedil;&otilde;es nos materiais contidos em seu site a qualquer momento, sem aviso pr&eacute;vio. No entanto, Pedro Tech n&atilde;o se compromete a atualizar os materiais.</span></p>
        <h2 ><span >6. Links</span></h2>
        <p><span >O Pedro Tech n&atilde;o analisou todos os sites vinculados ao seu site e n&atilde;o &eacute; respons&aacute;vel pelo conte&uacute;do de nenhum site vinculado. A inclus&atilde;o de qualquer link n&atilde;o implica endosso por Pedro Tech do site. O uso de qualquer site vinculado &eacute; por conta e risco do usu&aacute;rio.</span></p>
        <p>&nbsp;</p>
        <h3><span >Modifica&ccedil;&otilde;es</span></h3>
        <p><span >O Pedro Tech pode revisar estes termos de servi&ccedil;o do site a qualquer momento, sem aviso pr&eacute;vio. Ao usar este site, voc&ecirc; concorda em ficar vinculado &agrave; vers&atilde;o atual desses termos de servi&ccedil;o.</span></p>
        <h3><span >Lei aplic&aacute;vel</span></h3>
        <p><span >Estes termos e condi&ccedil;&otilde;es s&atilde;o regidos e interpretados de acordo com as leis do Pedro Tech e voc&ecirc; se submete irrevogavelmente &agrave; jurisdi&ccedil;&atilde;o exclusiva dos tribunais naquele estado ou localidade.</span></p>

        <h1 id="politica">Política de Privacidade</h1>

        <p>A sua privacidade é importante para nós. É política do site Pedro Tech respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://www.pedrotech.gq" target="_blank" rel="noopener">Pedro Tech</a>, e outros sites que possuímos e operamos.</p>

        <p>Trabalhamos com base na Lei de Proteção de Dados (13.709/2018) que traz garantias de privacidade, confidencialidade, retenção, proteção aos direitos fundamentais de liberdade e o livre desenvolvimento da personalidade da pessoa. Além disso, respeitamos a Constituição Federal da República Federativa do Brasil, o Código de Defesa do Consumidor (Lei 8.078/90), Marco Civil da Internet (Lei 12.965/14).</p>
        <p>

        </p>
        <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>

        <p>Deixamos claro o motivo que estamos coletando e como será usado, pois tudo é feito para correta administração geral.</p>

        <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis pela legislação atual ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

        <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto por determinação judicial.</p>

        <p>O nosso site pode ter links para sites externos que não são operados por nós. Diante disto, não nos responsabilizamos por danos de terceiros. Esteja ciente de que não temos controle sobre o conteúdo e práticas de sites de terceiros e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

        <p>Na qualidade de consumidor, você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>

        <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>

        <p>Nossa política é atualizada de forma constante.</p>

        <p>Fica, desde já, o titular de dados ciente que o conteúdo desta Política de Privacidade pode ser alterado a critério do site Pedro Tech, independente de aviso ou notificação. Em caso de alteração, as modificações produzem todos os efeitos a partir do momento da disponibilização no site. </p>

        <p>O site Pedro Tech não se responsabiliza caso você venha utilizar seus dados de forma incorreta ou inverídica, ficando excluído de qualquer responsabilidade neste sentido.</p>

        <h2>Política de Cookies</h2>

        <h3>O que são cookies?</h3>
        <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>

        <h3>Como usamos os cookies?</h3>
        <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>

        <h3>Desativar cookies</h3>
        <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>

        <h3>Cookies que definimos</h3>
        <ul>
            <li><strong>Cookies relacionados a pesquisas</strong><br><br>Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.<br><br></li>

            <li><strong>Cookies relacionados a formulários</strong><br><br>Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.<br><br></li>

            <li><strong>Cookies de preferências do site</strong><br><br>Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página que for afetada por suas preferências.<br></li>
        </ul>

        <h3>Cookies de Terceiros</h3>
        <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>
        <ul>


            <li>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.<br>
                Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</li>

            <li>Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</li>


        </ul>
        <h3>Compromisso do Usuário</h3>

        <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o site Pedro Tech oferece e com caráter enunciativo, mas não limitativo:</p>

        <ul>
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
            <li>B) Respeito a todas as legislações nacionais ou internacionais em que o Brasil é signatário;</li>
            <li>C) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, casas de apostas, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>D) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do site Pedro Tech, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados;</li>
            <li>E) Os conteúdos publicados, possuem direitos autorais e de propriedade intelectual reservados, conforme estabelece a Lei de Direitos Autorais n. 9.610, de 19.2.1998 do Governo Federal Brasileiro e correlatas. Qualquer infringência, serão comunicados às autoridades competentes.</li>
        </ul>

        <h2>Direitos do titular de dados</h2>
        <p>O titular de dados pessoais possui o direito de solicitar do site Pedro Tech, através do canal específico de tratamento, a qualquer momento, mediante requisição formal, informações referentes aos seus dados.</p>
        <p>Os pedidos serão analisados conforme previsto em legislação vigente dentro de um prazo de 72 horas, salvo determinação legal e/ou objeto de lei.</p>

        <p>Os titulares de dados, segundo o texto da LGPD, podem exercer os seus direitos por meio de:</p>
        <ul>
            <li>Confirmação da existência de tratamento;</li>


            <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto nesta Lei;</li>


            <li>Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;</li>

            <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>

        </ul>
        <h2>Como exercer os seus direitos de titular de dados?</h2>
        <ul>


            <li>Para as demais solicitações em relação aos direitos do titular de dados pessoais, entre em contato conosco;</li>
        </ul>

        <h2>Mais informações</h2>
        <p>Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>

        <p>O site Pedro Tech empregará esforços para resguardar as informações e dados coletados do usuário pelo site. Todavia, considerando que não há meio de transmissão e retenção de dados eletrônicos plenamente eficaz e seguro, o site Pedro Tech não pode assegurar que terceiros não autorizados não logrem êxito no acesso indevido, eximindo-se de qualquer responsabilidade por danos e prejuízos decorrentes da conduta de terceiros, ataques externos ao site como: vírus, invasão ao banco de dados, vícios ou defeitos técnicos, assim como operacionais resultante da utilização do site e em razão de falhas de conexão.</p>


        <form id="ter" action="inicio.php">
            <input type="checkbox" name="termo" id="termos" onchange="activateButton(this)" style="height: 1.5em; width: 1.5em; vertical-align: middle;">
            <label for="termos" style="color:black; font-family:Inter;">Eu Concordo com a Política de Privacidade e com os Termos e Condições</label>
            <input type="submit" name="submit" id="submit" onclick="terms()">
        </form>
        <div style="display: inline-flex; align-items: baseline;">
            <h3 id="ok" style="color:green"></h3>
            <button id="del" style="display:none;" onclick="del()">Rejeitar</button>
        </div>
    </div>
    <footer style="color: white; bottom: 0; position: relative; height: auto;">
        <p>Copyright © 2022 | <a href="inicio.php" style="color:white">Pedro Tech</a> | Todos os Direitos Reservados
       <br><a href="termos.php#politica" style="color:#0095ff;">Política de Privacidade</a> e <a href="termos.php#termos" style="color:#0095ff;">Termos e Condições</a>
       <br>Hospedado por <a href="https://www.infinityfree.net/" target= "_blank" style="color:#0095ff">InfinityFree</a></p>
   </footer>
</body>