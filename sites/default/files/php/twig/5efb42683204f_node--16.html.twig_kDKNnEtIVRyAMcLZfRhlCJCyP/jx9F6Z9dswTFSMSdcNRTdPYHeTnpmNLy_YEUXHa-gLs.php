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

/* themes/custom/dawwie/templates/node/node--16.html.twig */
class __TwigTemplate_d915b7d00c2cc401ce220a310015ac2b86cb1c17b679f5ff706b8368206cfc73 extends \Twig\Template
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
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 't'],
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
        echo "<!-- Page Cover -->
<section class=\"error-section\" style=\"background-image: url('";
        // line 2
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/bg12.jpg');\">
    <div class=\"col-md-12 hgtper100 fRight padding0 displayTable header-cover\">
        <div class=\"content_area text-center displayTableCell verAlignMiddle\">
            <h1 class=\"heading cover-lg-heading text-color-dark1\">404!</h1>
            <p class=\"cover-sub-heading text-color-dark1 mb40 xs-mb20\">";
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Page not found"));
        echo "</p>
            <p class=\"text-extra text-color-dark1 mb40 xs-mb20\">";
        // line 7
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("The requested page may have its name changed or is temporarily missing"));
        echo "</p>
            <a href=\"";
        // line 8
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "\" class=\"btn btn-line btn-small btn-rounded btn-outline-dark mb40 xs-mb20\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Return to the home page"));
        echo "</a>
        </div>
    </div>
</section>
<style>
    div#block-dawwie-page-title
    {
        display: none;
    }
</style>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/node/node--16.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 8,  69 => 7,  65 => 6,  58 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/node/node--16.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/node/node--16.html.twig");
    }
}
