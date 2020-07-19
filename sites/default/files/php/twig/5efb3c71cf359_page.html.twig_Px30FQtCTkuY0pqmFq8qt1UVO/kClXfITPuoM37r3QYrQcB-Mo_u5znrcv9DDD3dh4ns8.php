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

/* themes/custom/dawwie/templates/layout/page.html.twig */
class __TwigTemplate_69c771e8682bb4b44530e519ea3c931d8d6c70e6daf73b5cf6f2b5e1d0da9283 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 72, "include" => 80];
        $filters = ["t" => 74, "escape" => 83];
        $functions = ["path" => 75];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'include'],
                ['t', 'escape'],
                ['path']
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
        // line 70
        echo "
<div ";
        // line 71
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(((($context["is_front"] ?? null)) ? ("class=\"wraper\"") : ("id=\"wraper\"")));
        echo ">
    ";
        // line 72
        if (($context["is_front"] ?? null)) {
            // line 73
            echo "    <div class=\"corona\">
        <p>";
            // line 74
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Corona Virus (COVID-19)"));
            echo "</p>
        <a href=\"";
            // line 75
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("entity.node.canonical", ["node" => 34]));
            echo "\" class=\"covid-19\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Latest News"));
            echo "</a>
        <span class=\"close\">X</span>
    </div>
    ";
        }
        // line 79
        echo "    ";
        // line 80
        echo "    ";
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/layout/_includes/header.html.twig"), "themes/custom/dawwie/templates/layout/page.html.twig", 80)->display($context);
        // line 81
        echo "
    <span class=\"c-user-info\">
        <span class=\"user-gender\">";
        // line 83
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["user_gender"] ?? null)), "html", null, true);
        echo "</span>
        <span class=\"user-govern\">";
        // line 84
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["user_govern"] ?? null)), "html", null, true);
        echo "</span>
    </span>

    ";
        // line 88
        echo "    ";
        if ((($context["node_type"] ?? null) != "course")) {
            // line 89
            echo "        ";
            if ($this->getAttribute(($context["page"] ?? null), "highlighted", [])) {
                // line 90
                echo "            <div class=\"highlighted\">
                <aside class=\"";
                // line 91
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
                echo " section clearfix\" role=\"complementary\">
                    ";
                // line 92
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
                echo "
                </aside>
            </div>
        ";
            }
            // line 96
            echo "    ";
        }
        // line 97
        echo "
    ";
        // line 99
        echo "    ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "

    ";
        // line 102
        echo "    ";
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/layout/_includes/footer.html.twig"), "themes/custom/dawwie/templates/layout/page.html.twig", 102)->display($context);
        // line 103
        echo "</div>
";
        // line 104
        if (($context["is_front"] ?? null)) {
            // line 105
            echo "    <a href=\"javascript:void(0)\" id=\"scroll\"></a>
";
        } else {
            // line 107
            echo "    <a class=\"scrollTopButton\" href=\"#.\" style=\"opacity: 1;\"><i class=\"ti-arrow-up\"></i></a>
    ";
        }
        // line 109
        echo "

<div id=\"ModalFourm\" class=\"modal\">
    <!-- Modal content -->
    <div class=\"modal-content\">
        <!--<span class=\"close\">&times;</span>-->
        <section class=\"sectionPT sectionPB bg-color-light3\">
            <div class=\"container s2\">
                <div class=\"row row-eq-height\" style=\"background-image: url('";
        // line 117
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/new-fourm-back.jpg');background-size: cover;background-repeat: no-repeat;height: 700px;\">
                    <div class=\"col-md-6 padding02\">
                        <span class=\"close ss\">&times;</span>
                        <div class=\"form_area bg-color-light1 s2\">
                            ";
        // line 121
        if (( !($context["logged_in"] ?? null) && ($context["node_id"] ?? null))) {
            echo "     
                                <div class=\"add-story-not-logged\">
                                    <p>";
            // line 123
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("You have to"));
            echo " <a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["language"] ?? null)), "html", null, true);
            echo "/user/login?destination=";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("entity.node.canonical", ["node" => ($context["node_id"] ?? null)]), "html", null, true);
            echo "&openform=true\" class=\"btn on-dark btn-primary\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Login"));
            echo "</a> ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("First"));
            echo "</p>
                                </div>
                            ";
        }
        // line 126
        echo "                            <form class=\"add-new-story-form form form-style4 needs-validation s2 ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(((($context["logged_in"] ?? null)) ? ("") : ("add-story-form-not-logged")));
        echo "\" method=\"post\">
                                
                                <div class=\"col-md-12 text-center mb40\">
                                </div>
                                <div class=\"form-row s1\">
                                    <div class=\"col-md-12 mb41\">
                                        <span>";
        // line 132
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("In the past I was"));
        echo "</span>   <input type=\"text\" class=\"form-control s1\" required=\"true\" name=\"statement_1\">
                                    </div>
                                </div>
                                <div class=\"form-row s1\">
                                    <div class=\"col-md-12 mb41\">
                                        <span>";
        // line 137
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("I tried"));
        echo "</span>    <input type=\"text\" class=\"form-control s1\" placeholder=\" \" required=\"true\" name=\"statement_2\">
                                    </div>
                                </div>
                                <div class=\"form-row s1\">
                                    <div class=\"col-md-12 mb41\">
                                        <span>";
        // line 142
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("And I thought about"));
        echo "</span>   <input type=\"text\" class=\"form-control s1\" placeholder=\" \" required=\"true\" name=\"statement_3\">
                                    </div>
                                </div>
                                <div class=\"form-row s1\">
                                    <div class=\"col-md-12 mb41\">
                                        <span>";
        // line 147
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("I asked and spoke with"));
        echo "</span>  <input type=\"text\" class=\"form-control s1\" placeholder=\" \" required=\"true\" name=\"statement_4\">
                                    </div>
                                </div>
                                <div class=\"form-row s1\">
                                    <div class=\"col-md-12 mb41\">
                                        <span>";
        // line 152
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("They told me"));
        echo "</span>     <input type=\"text\" class=\"form-control s1\" placeholder=\" \" required=\"true\" name=\"statement_5\">
                                    </div>
                                </div>
                                <div class=\"form-row s1\">
                                    <div class=\"col-md-12 mb41\">
                                        <span>";
        // line 157
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Until"));
        echo "</span>     <input type=\"text\" class=\"form-control s1\" placeholder=\" \" required=\"true\" name=\"statement_6\">
                                    </div>
                                </div>
                                <div class=\"form-row s1\">
                                    <div class=\"col-md-12 mb41\">
                                        <span>";
        // line 162
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("And Now"));
        echo "</span>   <input type=\"text\" class=\"form-control s1\" placeholder=\" \" required=\"true\" name=\"statement_7\">
                                    </div>
                                </div>
                                ";
        // line 165
        if (($context["logged_in"] ?? null)) {
            echo "  
                                    <input type=\"hidden\" name=\"user_id\" value=\"";
            // line 166
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["user_id"] ?? null)), "html", null, true);
            echo "\">
                                    <input type=\"hidden\" name=\"user_name\" value=\"";
            // line 167
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["user_name"] ?? null)), "html", null, true);
            echo "\">
                                    <input type=\"hidden\" name=\"user_gender\" value=\"";
            // line 168
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["user_gender"] ?? null)), "html", null, true);
            echo "\">
                                    <div class=\"form-row\">
                                        <div class=\"col-md-12 mb41\">
                                            <div class=\"col-md-12 text-center s1\">
                                                <button type=\"submit\" class=\"btn btn-primary mb10\">";
            // line 172
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Share Now"));
            echo "</button>
                                            </div>
                                        </div>
                                    </div>
                                ";
        }
        // line 177
        echo "                            </form>
                        </div>
                    </div>
                    <div class=\"col-md-5 img_area background-cover\">
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  275 => 177,  267 => 172,  260 => 168,  256 => 167,  252 => 166,  248 => 165,  242 => 162,  234 => 157,  226 => 152,  218 => 147,  210 => 142,  202 => 137,  194 => 132,  184 => 126,  169 => 123,  164 => 121,  157 => 117,  147 => 109,  143 => 107,  139 => 105,  137 => 104,  134 => 103,  131 => 102,  125 => 99,  122 => 97,  119 => 96,  112 => 92,  108 => 91,  105 => 90,  102 => 89,  99 => 88,  93 => 84,  89 => 83,  85 => 81,  82 => 80,  80 => 79,  71 => 75,  67 => 74,  64 => 73,  62 => 72,  58 => 71,  55 => 70,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/layout/page.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/layout/page.html.twig");
    }
}
