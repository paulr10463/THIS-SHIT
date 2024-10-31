package com.pechakuchas2.core.models;
 
import lombok.Setter;
 
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
 
import lombok.Getter;
 
@Getter
@Setter
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class QuestionOption {
     @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String optionId;
 
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String optionText;
 
}