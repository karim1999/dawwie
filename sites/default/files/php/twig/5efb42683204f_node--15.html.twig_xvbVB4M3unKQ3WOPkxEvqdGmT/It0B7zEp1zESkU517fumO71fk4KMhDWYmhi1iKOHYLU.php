<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/dawwie/templates/node/node--15.html.twig */
class __TwigTemplate_e1a90374ce5cf48e7d9218995f04bf2fec8e7151c28249c4fc6e52ceddf66765 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["t" => 57];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['t'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<article class=\"content\">
    <div id=\"rev_slider_152_1_wrapper\" class=\"rev_slider_wrapper fullscreen-container\" data-alias=\"coming-soon\" data-source=\"gallery\" style=\"background-color:#222222;padding:0px;\">
        <!-- START REVOLUTION SLIDER 5.4.1 fullscreen mode -->
        <div id=\"rev_slider_152_1\" class=\"rev_slider fullscreenbanner\" style=\"display:none;\" data-version=\"5.4.1\">
            <ul>    <!-- SLIDE  -->
                <li data-index=\"rs-414\" data-transition=\"fade\" data-slotamount=\"default\"
                    data-hideafterloop=\"0\" data-hideslideonmobile=\"off\"  data-easein=\"default\" data-easeout=\"default\" data-masterspeed=\"300\"  data-rotate=\"0\" data-saveperformance=\"off\"  data-title=\"Slide\" data-param1=\"\" data-param2=\"\" data-param3=\"\" data-param4=\"\" data-param5=\"\" data-param6=\"\" data-param7=\"\" data-param8=\"\" data-param9=\"\" data-param10=\"\" data-description=\"\">
                    <!-- MAIN IMAGE -->
                    <img src=\"/themes/custom/dawwie/img/comingsoon2.jpg\"  alt=\"\"  data-bgposition=\"center center\" data-kenburns=\"on\" data-duration=\"20000\" data-ease=\"Linear.easeNone\" data-scalestart=\"130\" data-scaleend=\"100\" data-rotatestart=\"0\" data-rotateend=\"0\" data-offsetstart=\"0 0\" data-offsetend=\"0 0\" class=\"rev-slidebg\" data-no-retina>
                    <!-- LAYERS -->
                    <!-- LAYER NR. 1 -->
                    <a class=\"tp-caption   tp-resizeme\"
                       href=\"/\"
                       id=\"slide-414-layer-1\" 
                       data-x=\"['right','right','right','right']\" data-hoffset=\"['100','50','50','30']\" 
                       data-y=\"['top','top','top','top']\" data-voffset=\"['100','50','50','30']\" 
                       data-width=\"none\"
                       data-height=\"none\"
                       data-whitespace=\"nowrap\"

                       data-type=\"text\" 
                       data-basealign=\"slide\" 
                       data-responsive_offset=\"on\" 

                       data-frames='[{\"delay\":300,\"speed\":2000,\"frame\":\"0\",\"from\":\"x:right;fb:20px;\",\"to\":\"o:1;fb:0;\",\"ease\":\"Power4.easeOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;fb:0;\",\"ease\":\"Power3.easeInOut\"}]'
                       data-textAlign=\"['inherit','inherit','inherit','inherit']\"
                       data-paddingtop=\"[0,0,0,0]\"
                       data-paddingright=\"[0,0,0,0]\"
                       data-paddingbottom=\"[0,0,0,0]\"
                       data-paddingright=\"[0,0,0,0]\"
                       data-blendmode=\"screen\"

                       style=\"z-index: 5;\"><img src=\"/themes/custom/dawwie/img/logo-light.png\" alt=\"\"> </a>

                    <!-- LAYER NR. 2 -->
                    <div class=\"tp-caption   tp-resizeme\" 
                         id=\"slide-414-layer-2\" 
                         data-x=\"['right','right','right','right']\" data-hoffset=\"['100','50','50','30']\" 
                         data-y=\"['top','top','top','top']\" data-voffset=\"['200','150','150','120']\" 
                         data-fontsize=\"['100','100','100','70']\"
                         data-lineheight=\"['100','100','100','70']\"
                         data-width=\"none\"
                         data-height=\"none\"
                         data-whitespace=\"nowrap\"

                         data-type=\"text\" 
                         data-basealign=\"slide\" 
                         data-responsive_offset=\"on\" 

                         data-frames='[{\"delay\":400,\"speed\":2000,\"frame\":\"0\",\"from\":\"x:right;fb:20px;\",\"to\":\"o:1;fb:0;\",\"ease\":\"Power4.easeOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;fb:0;\",\"ease\":\"Power3.easeInOut\"}]'
                         data-textAlign=\"['inherit','inherit','inherit','inherit']\"
                         data-paddingtop=\"[0,0,0,0]\"
                         data-paddingright=\"[0,0,0,0]\"
                         data-paddingbottom=\"[0,0,0,0]\"
                         data-paddingright=\"[0,0,0,0]\"

                         style=\"z-index: 6; white-space: nowrap; font-size: 100px; line-height: 100px; font-weight: 700; color: rgba(255, 255, 255, 1.00);font-family: DroidKufi-Regular, sans-serif;letter-spacing:-5px;\">";
        // line 57
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Soon"));
        echo " </div>

                    <!-- LAYER NR. 3 -->
                    <div class=\"tp-caption   tp-resizeme\" 
                         id=\"slide-414-layer-3\" 
                         data-x=\"['right','right','right','right']\" data-hoffset=\"['100','50','50','30']\" 
                         data-y=\"['top','top','top','top']\" data-voffset=\"['290','240','240','190']\" 
                         data-fontsize=\"['100','100','100','70']\"
                         data-lineheight=\"['100','100','100','70']\"
                         data-width=\"none\"
                         data-height=\"none\"
                         data-whitespace=\"nowrap\"
                         data-type=\"text\" 
                         data-basealign=\"slide\" 
                         data-responsive_offset=\"on\" 
                         data-frames='[{\"delay\":500,\"speed\":2000,\"frame\":\"0\",\"from\":\"x:right;fb:20px;\",\"to\":\"o:1;fb:0;\",\"ease\":\"Power4.easeOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;fb:0;\",\"ease\":\"Power3.easeInOut\"}]'
                         data-textAlign=\"['inherit','inherit','inherit','inherit']\"
                         data-paddingtop=\"[0,0,0,0]\"
                         data-paddingright=\"[0,0,0,0]\"
                         data-paddingbottom=\"[0,0,0,0]\"
                         data-paddingright=\"[0,0,0,0]\"

                         style=\"z-index: 7; white-space: nowrap; font-size: 100px; line-height: 100px;margin-top:20px ; font-weight: 300; color: rgba(255, 255, 255, 1.00);  font-family: DroidKufi-Regular, sans-serif;letter-spacing:-5px;\">";
        // line 79
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("We are Working on the page"));
        echo "</div>


                    <!-- LAYER NR. 12 -->
                    <a id=\"fb\" class=\"tp-caption   tp-resizeme\" 
                       target=\"_blank\" href=\"https://web.facebook.com/DawwieInitiative/\" id=\"slide-414-layer-16\" 
                       data-x=\"['right','right','right','right']\" data-hoffset=\"['100','50','50','30']\" 
                       data-y=\"['bottom','bottom','bottom','bottom']\" data-voffset=\"['100','100','50','30']\" 
                       data-width=\"60\"
                       data-height=\"60\"
                       data-whitespace=\"nowrap\"
                       data-type=\"text\" 
                       data-actions=''
                       data-basealign=\"slide\" 
                       data-responsive_offset=\"on\" 

                       data-frames='[{\"delay\":2000,\"speed\":1000,\"frame\":\"0\",\"from\":\"y:50px;opacity:0;fb:20px;\",\"to\":\"o:1;fb:0;\",\"ease\":\"Power4.easeOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;fb:0;\",\"ease\":\"Power3.easeInOut\"},{\"frame\":\"hover\",\"speed\":\"300\",\"ease\":\"Power2.easeInOut\",\"to\":\"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;\",\"style\":\"c:rgba(255, 255, 255, 1.00);bg:rgba(59, 89, 152, 1.00);bc:rgba(59, 89, 152, 1.00);\"}]'
                       data-textAlign=\"['center','center','center','center']\"
                       data-paddingtop=\"[0,0,0,0]\"
                       data-paddingright=\"[0,0,0,0]\"
                       data-paddingbottom=\"[0,0,0,0]\"
                       data-paddingright=\"[0,0,0,0]\"

                       style=\"z-index: 16; min-width: 60px; max-width: 60px; max-width: 60px; max-width: 60px; white-space: nowrap; font-size: 20px; line-height: 60px; font-weight: 400; color: rgba(255, 255, 255, 1.00);font-family:Open Sans;border-color:rgba(255, 255, 255, 1.00);border-style:solid;border-width:2px 2px 2px 2px;border-radius:50% 50% 50% 50%;cursor:pointer;\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> </a>


                </li>
            </ul>
            <div class=\"tp-bannertimer tp-bottom\" style=\"visibility: hidden !important;\">
            </div> 
        </div>
    </div><!-- END REVOLUTION SLIDER -->
</article>

 ";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/node/node--15.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 79,  113 => 57,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/node/node--15.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/node/node--15.html.twig");
    }
}
