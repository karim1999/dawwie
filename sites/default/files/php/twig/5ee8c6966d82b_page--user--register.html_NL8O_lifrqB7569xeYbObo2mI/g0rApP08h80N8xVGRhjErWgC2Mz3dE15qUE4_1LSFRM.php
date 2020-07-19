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

/* themes/custom/dawwie/templates/pages/page--user--register.html.twig */
class __TwigTemplate_39fff3611380542bca5fc6c215a12d1b2d9e1a7e870d162dd1893a3d01f41a52 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["include" => 58, "if" => 61];
        $filters = ["escape" => 63, "t" => 76];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['include', 'if'],
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
        // line 54
        echo "
<div id=\"wraper\">

    ";
        // line 58
        echo "    ";
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/layout/_includes/header.html.twig"), "themes/custom/dawwie/templates/pages/page--user--register.html.twig", 58)->display($context);
        // line 59
        echo "
    ";
        // line 61
        echo "    ";
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", [])) {
            // line 62
            echo "        <div class=\"highlighted\">
            <aside class=\"";
            // line 63
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
            echo " section clearfix\" role=\"complementary\">
                ";
            // line 64
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
            echo "
            </aside>
        </div>
    ";
        }
        // line 68
        echo "
    ";
        // line 70
        echo "    <section class=\"gymVideoSection overlaySection solidWhiteOverlay background-cover\" style=\"background-image: url(../img/bg12.jpg);padding-top: 0;\">
        <div class=\"container\">
            <div class=\"row\">
                <div class=\"col-lg-6 col-sm-12 col-12 HGT600 xs-HGTAuto displayTable\">
                    <div class=\"form_area bg-color-light1\">
                        <div class=\"col-md-12 text-center mb40 front-reg-form\">
                            <h5 class=\"heading\">";
        // line 76
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Register a new account"));
        echo "</h5>
                            ";
        // line 77
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
                        </div>
                        <p class=\"text-center mb20\">
                            ";
        // line 80
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Already have an account?"));
        echo " <a href=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["language"] ?? null)), "html", null, true);
        echo "/user/login\" class=\"text-colorPrimary\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Login"));
        echo "</a>
                        </p>
                    </div>
                </div>
                <div class=\"col-lg-6 col-sm-12 col-12 HGT600 xs-HGTAuto displayTable\">
                    <div class=\"displayTableCell verAlignMiddle xs-pb50\">
                        <div class=\"gym_video overlaySection gymPrimaryColorOverlay background-cover displayFlex justifyCenter alignItemsCenter\" style=\"background-image: url('";
        // line 86
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/register.jpg');\">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    ";
        // line 95
        echo "    ";
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/layout/_includes/footer.html.twig"), "themes/custom/dawwie/templates/pages/page--user--register.html.twig", 95)->display($context);
        // line 96
        echo "</div>
<a class=\"scrollTopButton\" href=\"#.\" style=\"opacity: 1;\"><i class=\"ti-arrow-up\"></i></a>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/pages/page--user--register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  132 => 96,  129 => 95,  118 => 86,  104 => 80,  98 => 77,  94 => 76,  86 => 70,  83 => 68,  76 => 64,  72 => 63,  69 => 62,  66 => 61,  63 => 59,  60 => 58,  55 => 54,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/pages/page--user--register.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/pages/page--user--register.html.twig");
    }
}
