import { elementCreator, container,cleanContainer } from ".";
const createCarte = () => {
    /* cleanContainer() */
    console.log("JE SUIS LA CARTE")
    const menuContainer = elementCreator("div","container")
    menuContainer.innerHTML = `<table>
    <thead><tr><th><h4><p class="themecolor">menu efferveSENS 26€* // 38€</p></h4><h6>entrée + plat ou plat + dessert* // entrée + plat + dessert<br><i>*uniquement le midi, du lundi au vendredi, hors jours fériés</i></h6></th></tr></thead>
    <tbody>
    <tr><td>MAQUEREAU <br>A la flamme, avocat, betterave en 2 façons vinaigrette agrumes/soja</td><td>9€50</td></tr>
    <tr><td>SALADE ESTIVALE<br>Jeunes pousses, asperges, poudre de lard fumé, amandes torréfiées, 
    fromage de brebis, jaune d'œuf mariné, vinaigrette amandes</td><td>9€50</td></tr>
    <tr><td><div class="hr_dots" style="margin:0 auto 30px"><span style=""></span><span style=""></span><span style=""></span></div>
    </td><td></td></tr>
    <tr><td>POULET FERMIER<br>Suprême de poulet, cromesquis d’aubergine rôti, pomme de terre au BBQ, jus corsé</td><td>20€00</td></tr>
    <tr><td>LIEU JAUNE<br>Juste nacré, chou-fleur, fenouil croquant, bisque de langoustine</td><td>21€50</td></tr>
    <tr><td><div class="hr_dots" style="margin:0 auto 30px"><span style=""></span><span style=""></span><span style=""></span></div>
    </td><td></td></tr>
    <tr><td>TARTE CITRON<br>Tarte citron meringuée, sorbet yuzu/coriandre</td><td>9€00</td></tr>
    <tr><td>POMME<br>Flambée au Calvados, sablé breton, crème d'amandes, sorbet au lait d'amande</td><td>9€00</td></tr>
    </tbody></table>`
    container.append(menuContainer)
}

export {createCarte}