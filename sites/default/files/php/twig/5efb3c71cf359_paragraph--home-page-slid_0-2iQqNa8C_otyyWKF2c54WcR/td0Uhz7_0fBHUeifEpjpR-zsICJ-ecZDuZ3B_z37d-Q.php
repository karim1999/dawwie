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

/* themes/custom/dawwie/templates/paragraphs/paragraph--home-page-slider.html.twig */
class __TwigTemplate_694ed69c346324dc19e06788006de5a47e63fbfd39e2f1c72ae3615916c67618 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 54];
        $filters = ["escape" => 66, "render" => 73];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape', 'render'],
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
        // line 50
        echo "

<div class=\"item\"> 
    <div class=\"hp-slider-item-img\">
        ";
        // line 54
        if ($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_youtube_link", []), 0, [], "array"), "#url", [], "array")) {
            // line 55
            echo "            <video width=\"100%\" height=\"100%\" autoplay loop muted playsinline>
                <source src=\"/video/Unicef_Dawwie_Final_HQ2.mp4\" type=\"video/mp4\">
            </video>
            <style>
                video {

                    object-fit: cover;
                }

            </style>
              ";
        } else {
            // line 66
            echo "                ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_slider_image", []), 0, [])), "html", null, true);
            echo "
            ";
        }
        // line 68
        echo "    </div>
    <div class=\"caption\">
        <div class=\"display\">";
        // line 70
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_slider_title", []), 0, [])), "html", null, true);
        echo "</div>
        <div class=\"content\"> ";
        // line 71
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_slider_snippet", []), 0, [])), "html", null, true);
        echo "</div>
        ";
        // line 72
        if ($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_slider_button_1", []), 0, [], "array")) {
            // line 73
            echo "            <a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_slider_button_1", []), 0, [], "array"), "#url", [], "array"))), "html", null, true);
            echo "\" class=\"btn on-dark btn-primary\" title=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_slider_button_1", []), 0, [], "array"), "#title", [], "array"))), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_slider_button_1", []), 0, [], "array"), "#title", [], "array"))), "html", null, true);
            echo "</a> 
        ";
        }
        // line 75
        echo "    </div>  
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/paragraphs/paragraph--home-page-slider.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  106 => 75,  96 => 73,  94 => 72,  90 => 71,  86 => 70,  82 => 68,  76 => 66,  63 => 55,  61 => 54,  55 => 50,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/paragraphs/paragraph--home-page-slider.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/paragraphs/paragraph--home-page-slider.html.twig");
    }
}
