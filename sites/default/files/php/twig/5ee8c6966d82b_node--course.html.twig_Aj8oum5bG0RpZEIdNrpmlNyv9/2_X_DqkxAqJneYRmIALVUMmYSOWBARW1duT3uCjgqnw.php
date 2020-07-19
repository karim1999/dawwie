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

/* themes/custom/dawwie/templates/node/node--course.html.twig */
class __TwigTemplate_b4b1aa12156ada72f57fbe998016a335dcb66c983b52479b705826341151c46b extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 41, "if" => 51];
        $filters = ["escape" => 2, "t" => 6];
        $functions = ["file_url" => 2, "path" => 83];

        try {
            $this->sandbox->checkSecurity(
                ['for', 'if'],
                ['escape', 't'],
                ['file_url', 'path']
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

<section class=\"courses_details_area pt-80 pb-130\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"col-lg-4 order-lg-last\">
                <div class=\"courses_details_sidebar\">
                    <div class=\"courses_sidebar_image\">
                        <img src=\"";
        // line 18
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/courses-details.jpg\" />
                        <div class=\"price\">
                            <div class=\"price_wrapper\">
                                <p>";
        // line 21
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_course_price", []), 0, [])), "html", null, true);
        echo "</p>
                            </div>
                        </div>
                    </div>
                    <div class=\"courses_sidebar_title\">
                        <h4 class=\"title\">";
        // line 26
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Course Details"));
        echo "</h4>
                    </div>
                    <div class=\"courses_sidebar_list\">
                        <ul class=\"list\">
                            <li><i class=\"fa fa-clock-o\"></i>";
        // line 30
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Duration"));
        echo " <span>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_course_duration", []), 0, [])), "html", null, true);
        echo "</span></li>
                            <li><i class=\"fa fa-files-o\"></i>";
        // line 31
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Language"));
        echo "<span>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_course_language", []), 0, [])), "html", null, true);
        echo "</span></li>
                            <li><i class=\"fa fa-puzzle-piece\"></i>";
        // line 32
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Certificate"));
        echo "<span>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_course_certificate", []), 0, [])), "html", null, true);
        echo "</span></li>
                            <li><i class=\"fa fa-list\"></i>";
        // line 33
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Parts"));
        echo "<span>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_course_parts", []), 0, [])), "html", null, true);
        echo "</span></li>
                            <li><i class=\"fa fa-users\"></i>";
        // line 34
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Register"));
        echo "<span>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_course_register", []), 0, [])), "html", null, true);
        echo "</span></li>
                        </ul>
                        <ul class=\"social\">
                            <li><a target=\"_blank\" href=\"";
        // line 37
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_trainer_guide", []), "entity", []), "uri", []), "value", []))]), "html", null, true);
        echo "\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Download the coaches guide"));
        echo "</a></li>
                            <li><a target=\"_blank\" href=\"";
        // line 38
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_course_guide", []), "entity", []), "uri", []), "value", []))]), "html", null, true);
        echo "\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Download the trainees guide"));
        echo "</a></li>
                        </ul>
                        <ul class=\"list\">
                            ";
        // line 41
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["node"] ?? null), "field_course_features", []));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 42
            echo "                                <li> ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_features_list_title", []), "value", [])), "html", null, true);
            echo "  
                                    <p>";
            // line 43
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_features_list_description", []), "value", [])), "html", null, true);
            echo "</p>
                                </li>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 46
        echo "                        </ul>
                    </div>
                </div>
            </div>
            <div class=\"col-lg-8 order-lg-first\">
                ";
        // line 51
        if (($context["highlighted"] ?? null)) {
            // line 52
            echo "                    <div class=\"highlighted\">
                        <aside class=\"";
            // line 53
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
            echo " section clearfix\" role=\"complementary\">
                            ";
            // line 54
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["highlighted"] ?? null)), "html", null, true);
            echo "
                        </aside>
                    </div>
                ";
        }
        // line 58
        echo "                <div class=\"new-btn\">
                    ";
        // line 59
        if (($context["logged_in"] ?? null)) {
            // line 60
            echo "                        <a href=\"/";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["language"] ?? null)), "html", null, true);
            echo "/form/course-survey?status=pre&destination=/OnlineTRaining/";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["language"] ?? null)), "html", null, true);
            echo "/story_html5.html\" id=\"\" class=\"button-hover course-start-now\" style=\"vertical-align:middle\"><span>";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Start now"));
            echo "</span></a>
                    ";
        } else {
            // line 62
            echo "                        <button id=\"myBtn\" class=\"button-hover\" style=\"vertical-align:middle\"><span>";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Register now"));
            echo "</span></button>
                    ";
        }
        // line 64
        echo "                    <ul class=\"review_star\">
                        <li><span><i class=\"fa fa-star\"></i></span></li>
                        <li><span><i class=\"fa fa-star\"></i></span></li>
                        <li><span><i class=\"fa fa-star\"></i></span></li>
                        <li><span><i class=\"fa fa-star\"></i></span></li>
                        <li><span><i class=\"fa fa-star\"></i></span></li>
                    </ul>
                    <div id=\"myModal\" class=\"modal\">
                        <!-- Modal content -->
                        <div class=\"modal-content\">
                            <!--<span class=\"close\">&times;</span>-->
                            <section class=\"sectionPT sectionPB bg-color-light3 s0\">
                                <div class=\"container\">
                                    <div class=\"row row-eq-height\">
                                        <div class=\"col-md-6 padding0\">
                                            <span class=\"closeq\">&times;</span>
                                            <div class=\"form_area bg-color-light1 front-reg-form\">
                                                ";
        // line 81
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["register_form"] ?? null)), "html", null, true);
        echo "
                                                <p class=\"text-center mb20 mt20\">
                                                    ";
        // line 83
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Already have an account?"));
        echo " <a href=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["language"] ?? null)), "html", null, true);
        echo "/user/login?destination=";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("entity.node.canonical", ["node" => $this->getAttribute(($context["node"] ?? null), "id", [])]), "html", null, true);
        echo "\" class=\"text-colorPrimary\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Login"));
        echo "</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div class=\"col-md-6 img_area background-cover\" style=\"
                                             background-image: url('";
        // line 88
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/new-im.jpg');
                                             \">
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
                <div class=\"courses_details_content\">
                    ";
        // line 99
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "body", []), 0, [])), "html", null, true);
        echo "
                </div>
                <div class=\"courses_details_content\">
                <br>
                    <h4 class=\"courses_details_title\">";
        // line 103
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Share the course"));
        echo "</h4>
                    <br>
                    <ul>
                        <li>";
        // line 106
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Connect and share it with your friends directly"));
        echo "</li>
                          
                        <li class=\"social-course\">
                            ";
        // line 109
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["addtoanybuttons"] ?? null)), "html", null, true);
        echo "
                        </li>
                    </ul>
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
</script>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/node/node--course.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  289 => 109,  283 => 106,  277 => 103,  270 => 99,  256 => 88,  241 => 83,  236 => 81,  217 => 64,  211 => 62,  201 => 60,  199 => 59,  196 => 58,  189 => 54,  185 => 53,  182 => 52,  180 => 51,  173 => 46,  164 => 43,  159 => 42,  155 => 41,  147 => 38,  141 => 37,  133 => 34,  127 => 33,  121 => 32,  115 => 31,  109 => 30,  102 => 26,  94 => 21,  88 => 18,  74 => 7,  68 => 6,  63 => 4,  58 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/node/node--course.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/node/node--course.html.twig");
    }
}
