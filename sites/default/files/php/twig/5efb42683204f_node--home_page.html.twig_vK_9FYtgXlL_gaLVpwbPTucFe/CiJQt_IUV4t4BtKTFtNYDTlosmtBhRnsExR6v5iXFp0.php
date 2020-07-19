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

/* themes/custom/dawwie/templates/node/node--home_page.html.twig */
class __TwigTemplate_91d758f94453f134ce3a05496971c5c0562b5a0b5e09380be25b3dbec40c12ff extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 88, "set" => 142, "if" => 165];
        $filters = ["escape" => 6, "t" => 31, "render" => 142, "length" => 149, "raw" => 149, "slice" => 149];
        $functions = ["file_url" => 85];

        try {
            $this->sandbox->checkSecurity(
                ['for', 'set', 'if'],
                ['escape', 't', 'render', 'length', 'raw', 'slice'],
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
        echo "<div class=\"preloader js-preloader flex-center\"></div>

";
        // line 4
        echo "<div class=\"slider style-1\">
    <div class=\"owl-main owl-carousel owl-theme\">
        ";
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_hp_slider", [])), "html", null, true);
        echo "
    </div>
</div>
";
        // line 10
        echo "<section class=\"about-us ptb-120\">
    <div class=\"container-fluid\">
        <div class=\"col-lg-12 col-md-12 col-xs-12\">
            <div class=\"row\">
                <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">
                    <div class=\"content-sec\">
                        <div class=\"heading\">
                            <h2><span></span>";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s2_title", []), 0, [])), "html", null, true);
        echo "</h2>
                        </div>
                        <p>
                            ";
        // line 20
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s2_summary", []), 0, [])), "html", null, true);
        echo "
                        </p>
                        <div class=\"counter-sec\">
                            <div class=\"row\">
                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">
                                    <div class=\"counter-column\">
                                        <div class=\"count_icon\">
                                            <img src=\"";
        // line 27
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/safwat-3.png\" />
                                        </div>
                                        <div class=\"counter_content\">
                                            <div class=\"counter\">450</div>
                                            <div class=\"title\">";
        // line 31
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Participating stories"));
        echo "</div>
                                            <span>
                                              ";
        // line 33
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("#Your-story-complete-their-story"));
        echo "
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">
                                    <div class=\"counter-column\">
                                        <div class=\"count_icon\">
                                            <img src=\"";
        // line 41
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/safwat-1.png\" />
                                        </div>
                                        <div class=\"counter_content\">
                                            <div class=\"counter\">62,153</div>
                                            <div class=\"title\">";
        // line 45
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Our subscribers"));
        echo "</div>
                                            <span>";
        // line 46
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Join Dawwie events"));
        echo "</span>
                                        </div>
                                    </div>
                                </div>
                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">
                                    <div class=\"counter-column\">
                                        <div class=\"count_icon\">
                                            <img src=\"";
        // line 53
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/safwat-2.png\" />
                                        </div>
                                        <div class=\"counter_content\">
                                            <div class=\"counter\"><div id=\"facebookfeed\"></div></div>
                                            <div class=\"title\">";
        // line 57
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Social Media"));
        echo "</div>
                                            <span>";
        // line 58
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Interact with us"));
        echo "</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 animated bounceIn wow\">
                    <div class=\"img-sec\">
                        ";
        // line 68
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s2_image", []), 0, [])), "html", null, true);
        echo "
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

";
        // line 77
        echo "
<div class=\"section-full bg-white content-inner-1 portfolio2\">
    <div class=\"container-fluid\">
        <div class=\"max-w600 m-auto text-center m-b30\">
            <h2 class=\"m-t0\">";
        // line 81
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s3_title", []), 0, [])), "html", null, true);
        echo "</h2>
        </div>
    </div>
</div>
<div class=\"section-full overlay-black-dark our-projects\" style=\"background-image:url(";
        // line 85
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s3_background_image", []), 0, [], "array"), "#media", [], "array"), "field_media_image", []), "entity", []), "uri", []), "value", []))]), "html", null, true);
        echo ");background-size: cover;background-repeat: no-repeat;\">
    <div class=\"container text-white\">
        <div class=\"row m-lr0 d-flex align-items-stretch\">
            ";
        // line 88
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["node"] ?? null), "field_hp_s3_items", []));
        foreach ($context['_seq'] as $context["key"] => $context["item"]) {
            // line 89
            echo "                <div class=\"col-lg-4 col-md-4 p-lr0 d-flex ind-ser-info-bx\">
                    <div class=\"ind-service-info align-self-stretch\">
                        <span>0";
            // line 91
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["key"] + 1), "html", null, true);
            echo "</span>
                        <div class=\"ind-service-info-in\">
                            <h2> ";
            // line 93
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_hp_services_title", []), "value", [])), "html", null, true);
            echo "</h2>
                            <p>";
            // line 94
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_hp_services_summary", []), "value", [])), "html", null, true);
            echo "</p>
                        </div>
                        <a href=\"";
            // line 96
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_hp_services_button", []), 0, []), "url", [])), "html", null, true);
            echo "\" class=\"site-button btn-block d-flex justify-content-between white outline outline-2\">
                            <span>";
            // line 97
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_hp_services_button", []), 0, []), "title", [])), "html", null, true);
            echo "</span> 
                            <i class=\"ti-arrow-right\"></i>
                        </a>
                    </div>
                </div>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 103
        echo "        </div>
    </div>
</div>

";
        // line 108
        echo "<div class=\"section-full bg-white content-inner-1 portfolio imgs-shuffle\">
    <div class=\"container-fluid imgs-shuffle-container\">
        <div class=\"max-w600 m-auto text-center m-b30\">
            <h2 class=\"m-t0\">
                ";
        // line 112
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s4_title", []), 0, [])), "html", null, true);
        echo "
            </h2>
            ";
        // line 114
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s4_snippet", []), 0, [])), "html", null, true);
        echo "
        </div>
        <div id=\"ri-grid\" class=\"ri-grid ri-grid-size-2\">
            <img class=\"ri-loading-image\" src=\"";
        // line 117
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/images/loading.gif\"/>
            <ul>
                ";
        // line 119
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["section4_images"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 120
            echo "                    <li><a href=\"#\"><img src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["item"]), "html", null, true);
            echo "\"/></a></li>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 122
        echo "                ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["section4_images"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 123
            echo "                    <li><a href=\"#\"><img src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["item"]), "html", null, true);
            echo "\"/></a></li>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 125
        echo "            </ul>
        </div>
    </div>
</div>


";
        // line 132
        echo "<section class=\"testimo\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"col-sm-12\">
                <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">
                    <h2>";
        // line 137
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_hp_s5_title", []), 0, [])), "html", null, true);
        echo "</h2>

                    <div class=\"carousel-inner\">
                        ";
        // line 140
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["section4_stories"] ?? null));
        foreach ($context['_seq'] as $context["key"] => $context["items"]) {
            // line 141
            echo "
                            ";
            // line 142
            $context["description0"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 0, []), "description", [])));
            // line 143
            echo "
                            <div class=\"item carousel-item ";
            // line 144
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(((($context["key"] == 0)) ? ("active") : (" ")));
            echo "\">
                                <div class=\"row\">
                                    <div class=\"col-sm-6\">
                                        <div class=\"testimonial\">
                                            <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>
                                            <p>";
            // line 149
            (((twig_length_filter($this->env, ($context["description0"] ?? null)) > 100)) ? (print ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (twig_slice($this->env, ($context["description0"] ?? null), 0, 100) . "..."), "html", null, true))) : (print (($context["description0"] ?? null))));
            echo "</p>
                                            <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>
                                         <div class=\"details\"><a href=\"";
            // line 151
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 0, []), "alias", [])), "html", null, true);
            echo "\">اكمل الحكاية</a></div>
                                        </div>
                                        <div class=\"media\">
                                            <div class=\"media-left d-flex mr-3\">
                                                <img src=\"";
            // line 155
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 0, []), "photo", [])), "html", null, true);
            echo "\" alt=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 0, []), "title", [])), "html", null, true);
            echo "\"/>
                                            </div>
                                            <div class=\"media-body\">
                                                <div class=\"overview\">
                                                    <div class=\"name\"><b>";
            // line 159
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 0, []), "title", [])), "html", null, true);
            echo "</b></div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ";
            // line 165
            if ((twig_length_filter($this->env, $context["items"]) == 2)) {
                // line 166
                echo "
                                        ";
                // line 167
                $context["description1"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 1, []), "description", [])));
                // line 168
                echo "
                                        <div class=\"col-sm-6\">
                                            <div class=\"testimonial\">
                                                <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>
                                                <p>";
                // line 172
                (((twig_length_filter($this->env, ($context["description1"] ?? null)) > 100)) ? (print ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (twig_slice($this->env, ($context["description1"] ?? null), 0, 100) . "..."), "html", null, true))) : (print (($context["description1"] ?? null))));
                echo "</p>
                                                <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>
                                               <div class=\"details\"><a href=\"";
                // line 174
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 1, []), "alias", [])), "html", null, true);
                echo "\">اكمل الحكاية</a></div>
                                            </div>
                                            <div class=\"media\">
                                                <div class=\"media-left d-flex mr-3\">
                                                    <img src=\"";
                // line 178
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 1, []), "photo", [])), "html", null, true);
                echo "\" alt=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 1, []), "title", [])), "html", null, true);
                echo "\"/>
                                                </div>
                                                <div class=\"media-body\">
                                                    <div class=\"overview\">
                                                        <div class=\"name\"><b>";
                // line 182
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["items"], 1, []), "title", [])), "html", null, true);
                echo "</b></div>
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ";
            }
            // line 189
            echo "                                </div>
                            </div>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['items'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 192
        echo "
                    </div>
                    <!-- Carousel controls -->
                    <a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">
                        <i class=\"fa fa-chevron-left\"></i>
                    </a>
                    <a class=\"carousel-control left carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">
                        <i class=\"fa fa-chevron-right\"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!--<div class=\"circle strong-border\"></div>-->
</section>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/node/node--home_page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  408 => 192,  400 => 189,  390 => 182,  381 => 178,  374 => 174,  369 => 172,  363 => 168,  361 => 167,  358 => 166,  356 => 165,  347 => 159,  338 => 155,  331 => 151,  326 => 149,  318 => 144,  315 => 143,  313 => 142,  310 => 141,  306 => 140,  300 => 137,  293 => 132,  285 => 125,  276 => 123,  271 => 122,  262 => 120,  258 => 119,  253 => 117,  247 => 114,  242 => 112,  236 => 108,  230 => 103,  218 => 97,  214 => 96,  209 => 94,  205 => 93,  200 => 91,  196 => 89,  192 => 88,  186 => 85,  179 => 81,  173 => 77,  162 => 68,  149 => 58,  145 => 57,  138 => 53,  128 => 46,  124 => 45,  117 => 41,  106 => 33,  101 => 31,  94 => 27,  84 => 20,  78 => 17,  69 => 10,  63 => 6,  59 => 4,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/node/node--home_page.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/node/node--home_page.html.twig");
    }
}
