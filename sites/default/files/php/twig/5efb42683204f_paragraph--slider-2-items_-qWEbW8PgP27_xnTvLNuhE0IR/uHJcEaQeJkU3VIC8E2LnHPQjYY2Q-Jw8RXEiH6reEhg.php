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

/* themes/custom/dawwie/templates/paragraphs/paragraph--slider-2-items.html.twig */
class __TwigTemplate_4bbb356c352a5d583f131a2fa4d7c494f24e2b8b104573ca1b265c31548ef197 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 2, "render" => 6];
        $functions = ["file_url" => 2];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 'render'],
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
        echo "<div class=\"item sadadawi-slider-item\">
    <div class=\"header-cover header-cover-style1 overlays darkOverlay position-top full-height\" style=\"background-image: url(";
        // line 2
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_slide2_items_image", []), 0, [], "array"), "#media", [], "array"), "field_media_image", []), "entity", []), "uri", []), "value", []))]), "html", null, true);
        echo ")\">
        <div class=\"cover-content col-md-8 col-center textCenter\">
            <p class=\"cover-sub-heading text-color-white1 mb20 xs-mb10\">دوّى فى المحافظات</p>
            <h1 class=\"cover-lg-heading text-color-white1 textCenter mb40 xs-mb20\">";
        // line 5
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_slide2_items_title", []), 0, [])), "html", null, true);
        echo "</h1>
            <a href=\"";
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_youtube_link", []), 0, [], "array"), "#url", [], "array"))), "html", null, true);
        echo "\" class=\"popup-youtube video\" title=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_slide2_items_title", []), 0, [])), "html", null, true);
        echo "\">
                <div id=\"play-video\" class=\"video-play-button\">
                    <span></span>
                </div>
            </a>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/paragraphs/paragraph--slider-2-items.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  68 => 6,  64 => 5,  58 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/paragraphs/paragraph--slider-2-items.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/paragraphs/paragraph--slider-2-items.html.twig");
    }
}
