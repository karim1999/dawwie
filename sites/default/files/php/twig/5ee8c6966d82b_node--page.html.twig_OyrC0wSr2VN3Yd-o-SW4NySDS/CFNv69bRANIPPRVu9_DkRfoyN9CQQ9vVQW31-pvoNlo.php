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

/* themes/custom/dawwie/templates/node/node--page.html.twig */
class __TwigTemplate_2b2e4076dd83db9136c49a72d3d198ffc5ab0d6ca34db9184241e506eb5c08f4 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 2, "t" => 6];
        $functions = ["file_url" => 2];

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
        echo "<!-- Page Cover -->
<section class=\"page-cover darkOverlay sm-sectionPT sm-sectionPB text-center\" style=\"background-image: url(";
        // line 2
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_top_image", []), "entity", []), "field_media_image", []), "entity", []), "fileuri", []))]), "html", null, true);
        echo ");\">
    <div class=\"col-center text-center col-md-8 col-lg-7\">
        <h4 class=\"heading text-color-white1 mt10 mb20\">";
        // line 4
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "label", [])), "html", null, true);
        echo "</h4>
        <ul class=\"breadcrumb\">
            <li class=\"text-color-white1\"><a href=\"";
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["frontpage"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Home"));
        echo "</a></li>
            <li class=\"active text-color-white1\">";
        // line 7
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "label", [])), "html", null, true);
        echo "</li>
        </ul>
    </div>
</section>

<!-- Trusted Section -->
<section class=\"HGT550 background-cover sectionPT\" style=\"background-image: url(";
        // line 13
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_main_content_bg", []), "entity", []), "field_media_image", []), "entity", []), "fileuri", []))]), "html", null, true);
        echo ")\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"col-md-8 col-center textCenter\">
                ";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_main_content", []), 0, [])), "html", null, true);
        echo "
            </div>
        </div>
    </div>
</section>
<!-- End Trusted Section -->
";
        // line 23
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_blocks", [])), "html", null, true);
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/node/node--page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  99 => 23,  90 => 17,  83 => 13,  74 => 7,  68 => 6,  63 => 4,  58 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/node/node--page.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/node/node--page.html.twig");
    }
}
