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

/* themes/custom/dawwie/templates/node/node--story.html.twig */
class __TwigTemplate_cfa90e4cfb1a7e838dc053ae2bf017d540262861f222e7b73191675c51873d65 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 5, "t" => 12];
        $functions = ["file_url" => 23];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 't'],
                ['file_url']
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
        echo "<style>
   
</style>
<!-- Start Header -->
<section class=\"page-cover darkOverlay sm-sectionPT sm-sectionPB text-center\" style=\"background-image: url(";
        // line 5
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/cover/andawii2.png);\">
    <div class=\"col-center text-center col-md-8 col-lg-7\">
        <!--<p class=\"text-color-white1\">Discover The Implo</p>-->
        <h4 class=\"heading text-color-white1 mt10 mb20\">
            حكايتك
        </h4>
        <ul class=\"breadcrumb\"style=\"direction: ltr;\">
            <li class=\"text-color-white1\"><a href=\"";
        // line 12
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["frontpage"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Home"));
        echo "</a></li>
            <li class=\"active text-color-white1\">
                ";
        // line 14
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Your Story"));
        echo "
            </li>
        </ul>
    </div>
</section>
<!-- Page Cover -->
<section class=\"sectionPT sectionPB sectionBG s3\">
    <div class=\"container\">
        <div class=\"textCenter mb20 avatar\">
            <img src=\"";
        // line 23
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_story_photo", []), "entity", []), "fileuri", []))]), "html", null, true);
        echo "\" alt=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "label", [])), "html", null, true);
        echo "\"/>  
            <h6 class=\"heading\">";
        // line 24
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "label", [])), "html", null, true);
        echo "</h6>
        </div>
        <div class=\"row\">
            <div class=\"col-lg-10 col-center\">
                <div class=\"blockquote blockquote-style1 s03\">
                    <i class=\"fas fa-quote-right fRight quoteIcon\"></i>
                    <blockquote>
                        ";
        // line 31
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_story_content", []), 0, [])), "html", null, true);
        echo "
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    // Get the modal
    var modal = document.getElementById(\"myModal\");

    // Get the button that opens the modal
    var btn = document.getElementById(\"myBtn\");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName(\"closeq\")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = \"block\";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = \"none\";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = \"none\";
        }
    }
</script>
<style>
    .page-cover {
    margin-top: 0;
}
.highlighted {
    padding: 43px;
}
</style>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/node/node--story.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  106 => 31,  96 => 24,  90 => 23,  78 => 14,  71 => 12,  61 => 5,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/node/node--story.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/node/node--story.html.twig");
    }
}
