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

/* themes/custom/dawwie/templates/layout/_includes/footer.html.twig */
class __TwigTemplate_45646c531bdfb1dadf5d31eb0205aaf4cfd762ac81a9623a19e3ef11950f446f extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["t" => 8, "escape" => 9];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['t', 'escape'],
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
        echo "<!-- Footer -->
<footer class=\"site-footer\">
    <div class=\"footer-top bg-gray-dark\">
        <div class=\"container\">
            <div class=\"row\">
                <div class=\"col-12 col-lg-2 col-md-6 col-sm-6 footer-col-4\">
                    <div class=\"widget widget_services border-0\">
                        <h5 class=\"m-b30 text-white\">";
        // line 8
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Join Us"));
        echo "</h5>
                        ";
        // line 9
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["useful_links"] ?? null)), "html", null, true);
        echo "
                    </div>
                </div>
                   <div class=\"col-12 col-lg-3 col-md-6 col-sm-6 footer-col-4\">
                    <div class=\"widget widget_services border-0\">
                        <h5 class=\"m-b30 text-white\">";
        // line 14
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Find out more"));
        echo "</h5>
                        ";
        // line 15
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_menu"] ?? null)), "html", null, true);
        echo "
                    </div>
                </div>
                <div class=\"col-lg-4 col-md-6 col-sm-6 footer-col-4\">
                    <div class=\"widget widget_getintuch\">
                        ";
        // line 20
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["connect_us"] ?? null)), "html", null, true);
        echo "
                    </div>
                </div>
             
                <div class=\"col-lg-3 col-md-6 col-sm-6 footer-col-4 \">
                    <div class=\"widget\">
                        ";
        // line 26
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_text"] ?? null)), "html", null, true);
        echo "
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

";
        // line 42
        echo "
<!-- Modal -->
<div class=\"modal fade\" id=\"ourPartners\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ourPartnersLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog\" role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
                    <span aria-hidden=\"true\">&times;</span>
                </button>
            </div>
            <div class=\"modal-body\">
                <img src=\"";
        // line 53
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/Untitled-1.png\" />
            </div>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/layout/_includes/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  121 => 53,  108 => 42,  97 => 26,  88 => 20,  80 => 15,  76 => 14,  68 => 9,  64 => 8,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/layout/_includes/footer.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/layout/_includes/footer.html.twig");
    }
}
